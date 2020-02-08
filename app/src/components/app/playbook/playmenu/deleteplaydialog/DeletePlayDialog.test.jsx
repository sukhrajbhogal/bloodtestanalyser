import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeletePlayDialog from './DeletePlayDialog';
// setup
configure({ adapter: new Adapter() });

it('should call deleteCallback with correct parameters onCancel', () => {
  const deletePlayCallback = jest.fn();
  const deleteKey = 'delete_key';
  const wrapper = shallow(
    <DeletePlayDialog deletePlayCallback={deletePlayCallback} deleteKey={deleteKey} />,
  );
  wrapper.instance().handleCancel();
  expect(deletePlayCallback).toHaveBeenCalledWith('', false);
});

it('should call correct parameneters onOk', () => {
  const deletePlayCallback = jest.fn();
  const deleteKey = 'delete_key';
  const wrapper = shallow(
    <DeletePlayDialog deletePlayCallback={deletePlayCallback} deleteKey={deleteKey} />,
  );
  wrapper.instance().handleOk();
  expect(deletePlayCallback).toHaveBeenCalledWith('delete_key', false);
});

it('getPlayName should return the correct value', () => {
  const deleteKey = 'delete_key';
  const wrapper = shallow(
    <DeletePlayDialog deleteKey={deleteKey} />,
  );
  const playName = wrapper.instance().getPlayName(deleteKey);
  expect(playName).toEqual('delete key');
});
