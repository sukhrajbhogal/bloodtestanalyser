import React from 'react';
import './Playbook.scss';
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
              <div className="containerPlay">
                <div><pre>{JSON.stringify(appData, null, 2) }</pre></div>
              </div>
            );
          }
        }
      </AppContext.Consumer>
    );
  }
}

export default Playbook;
