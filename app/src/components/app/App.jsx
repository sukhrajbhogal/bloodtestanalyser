import React from 'react';
import './App.scss';
import { Menu, Icon } from 'antd';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Playbook from './playbook/Playbook';
import AppContext from '../../context/AppContext';
import AppData from '../../context/AppData'

class App extends React.Component {
  constructor(props) {
    super(props);

    let currentlocation = window.location.pathname;
    if (currentlocation !== '/') currentlocation = currentlocation.substring(1);
    else currentlocation = 'home';

    this.state = {
      theme: 'light',
      current: currentlocation,
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { theme, current } = this.state;
    console.log(AppData)

    return (
      <AppContext.Provider value={AppData}>
        <Router>
          <Menu
            theme={theme}
            onClick={this.handleClick}
            selectedKeys={current}
            mode="horizontal"
          >
            <Menu.Item style={{ float: 'right' }} key="home">
              <Link to="/home">
                <Icon type="reconciliation" />
                Home
              </Link>
            </Menu.Item>
          </Menu>
          <Switch>
            <Route exact path="/">
              <Playbook />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
