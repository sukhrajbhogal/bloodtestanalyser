import React from 'react';
import ReactDOM from 'react-dom';
import Roster from './Roster';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Roster />, div);
  ReactDOM.unmountComponentAtNode(div);
});
