import React from 'react';
import ReactDOM from 'react-dom';
import Tournament from './Tournament';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tournament />, div);
  ReactDOM.unmountComponentAtNode(div);
});
