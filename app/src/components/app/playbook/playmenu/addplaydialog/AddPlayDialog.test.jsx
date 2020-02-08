import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddPlayDialog from './AddPlayDialog';

// setup
configure({ adapter: new Adapter() });

it('should change state when handle Change is called', () => {
  const wrapper = shallow(<AddPlayDialog />);
  const e = { target: { value: 'Boohoo' } };
  wrapper.instance().handleChange(e);
  expect(wrapper.state().playName).toEqual('Boohoo');
});

it('should change call addPlayCallback with empty string on Cancel', () => {
  const addPlayCallback = jest.fn();
  const wrapper = shallow(<AddPlayDialog addPlayCallback={addPlayCallback} />);
  wrapper.setState({
    playName: 'my play',
  });
  wrapper.instance().handleCancel();
  expect(addPlayCallback).toHaveBeenCalledWith('', false);
});

it('should call addPlayBack with correct playName onOk', () => {
  const addPlayCallback = jest.fn();
  const wrapper = shallow(<AddPlayDialog addPlayCallback={addPlayCallback} />);
  wrapper.setState({
    playName: 'my play',
  });
  wrapper.instance().handleOk();
  expect(addPlayCallback).toHaveBeenCalledWith('my play', false);
});
