import React from 'react';
import './Playbook.scss';
import PlayMenu from './playmenu/PlayMenu';

class Playbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PlayMenu />
      </div>
    );
  }
}

export default Playbook;
