import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Menu } from 'antd';
import PlayMenu from './PlayMenu';

const { SubMenu } = Menu;
// setup
configure({ adapter: new Adapter() });

// handleclick
it('handleClick to perform with add-play', () => {
  const wrapper = shallow(<PlayMenu />);
  const e = { key: 'add-play' };
  wrapper.instance().handleClick(e);
  expect(wrapper.state().addDialogVisible).toBe(true);
});

it('handleClick to perform with a delete key', () => {
  const wrapper = shallow(<PlayMenu />);
  const e = { key: 'delete_boys' };
  wrapper.instance().handleClick(e);
  expect(wrapper.state().deleteDialogVisible).toBe(true);
});

it('handleClick to perform in the else statement', () => {
  const wrapper = shallow(<PlayMenu />);
  const e = { key: 'hello_this_play_edit' };
  wrapper.instance().handleClick(e);
  expect(wrapper.state().currentKey).toEqual('hello_this_play_edit');
});

// addplaycallback
it('addPlayCallback with no playName to perform', () => {
  const wrapper = shallow(<PlayMenu />);
  const spy = jest.spyOn(wrapper.instance(), 'addPlay');
  wrapper.instance().addPlayCallback('', false);
  expect(wrapper.state().addDialogVisible).toBe(false);
  expect(spy).toHaveBeenCalledTimes(0);
});

it('addPlayCallback with no playName to perform', () => {
  const wrapper = shallow(<PlayMenu />);
  const spy = jest.spyOn(wrapper.instance(), 'addPlay');
  wrapper.instance().addPlayCallback('nicePlay', false);
  expect(wrapper.state().addDialogVisible).toBe(false);
  expect(spy).toHaveBeenCalled();
});

// deleteplaycallback
it('deletePlayCallback with no playToDelete to perform', () => {
  const wrapper = shallow(<PlayMenu />);
  wrapper.setState({
    plays: [{ name: 'Split and Send' }, { name: 'Pinwheel' }],
  });
  wrapper.instance().deletePlayCallback('', false);
  expect(wrapper.state().deleteDialogVisible).toBe(false);
  expect(wrapper.state().plays).toEqual([{ name: 'Split and Send' }, { name: 'Pinwheel' }]);
  expect(wrapper.find(SubMenu)).toHaveLength(2);
});

it('deletePlayCallback with a playToDelete to delete', () => {
  const wrapper = shallow(<PlayMenu />);
  wrapper.setState({
    plays: [{ name: 'Split and Send' }, { name: 'Pinwheel' }],
  });
  wrapper.instance().deletePlayCallback('Split_and_Send', false);
  expect(wrapper.state().deleteDialogVisible).toBe(false);
  expect(wrapper.state().plays).toEqual([{ name: 'Pinwheel' }]);
  expect(wrapper.find(SubMenu)).toHaveLength(1);
});

// handleTitleClick
it('handleTitleClick should setState correctly', () => {
  const wrapper = shallow(<PlayMenu />);
  wrapper.instance().handleTitleClick({ key: 'wow_play' });
  expect(wrapper.state().currentKey).toEqual('wow_play_edit');
  expect(wrapper.state().currentPlayName).toEqual('wow_play');
});
