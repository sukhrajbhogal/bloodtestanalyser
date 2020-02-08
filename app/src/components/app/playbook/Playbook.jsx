import React from 'react';
import './Playbook.scss';
import PlayMenu from './playmenu/PlayMenu';
import AppContext from '../../../context/AppContext';

class Playbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContext.Consumer>
        {
          (appData) => {
            console.log(appData);
            return (
              <div>
                <PlayMenu />
              </div>
            );
          }
        }
      </AppContext.Consumer>
    );
  }
}

export default Playbook;
