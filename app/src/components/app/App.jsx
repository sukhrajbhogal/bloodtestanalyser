import React from 'react';
import './App.scss';
import { Menu, Icon } from 'antd';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Playbook from './playbook/Playbook';
import AppContext from '../../context/AppContext';
import AppData from '../../context/AppData';
import PlayMenu from './playbook/playmenu/PlayMenu';
import Overview from './overview/Overview';
import Risks from './risks/Risks';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    let currentlocation = window.location.pathname;
    if (currentlocation !== '/') currentlocation = currentlocation.substring(1);
    else currentlocation = 'home';

    this.state = {
      theme: 'light',
      current: currentlocation,
      counter: 0
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    const { theme, current } = this.state;
    return (
      <AppContext.Provider value={AppData}>
        <div style={{position: 'absolute', top: 0, right: 0}}>
          <h2>Hemo Analytics</h2>
        </div>
        <Router>
          <div className="containerRoot">
            <PlayMenu />
            <Switch>
              <Route exact path="/">
                <Playbook style={{}} />
              </Route>
              <Route exact path="/overview">
                <Overview />
              </Route>
              <Route exact path="/risks">
                <Risks />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
