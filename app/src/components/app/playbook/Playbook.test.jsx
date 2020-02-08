import React from 'react';
import ReactDOM from 'react-dom';
import Playbook from './Playbook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Playbook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
