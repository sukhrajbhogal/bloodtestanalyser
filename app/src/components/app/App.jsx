import React from 'react';
import './App.scss';
import { Menu, Icon } from 'antd';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Contact from './contact/Contact';
import Home from './home/Home';
import Playbook from './playbook/Playbook';
import Roster from './roster/Roster';
import Schedule from './schedule/Schedule';
import Tournament from './tournament/Tournament';

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

    return (
      <Router>
        <Menu
          theme={theme}
          onClick={this.handleClick}
          selectedKeys={current}
          mode="horizontal"
        >
          <Menu.Item style={{ float: 'right' }} key="contact">
            <Link to="/contact">
              <Icon type="mail" />
Contact
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="schedule">
            <Link to="/schedule">
              <Icon type="schedule" />
Schedule
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="roster">
            <Link to="/roster">
              <Icon type="skin" />
Roster
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="tournament">
            <Link to="/tournament">
              <Icon type="trophy" />
Tournament
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="playbook">
            <Link to="/playbook">
              <Icon type="reconciliation" />
Playbook
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} key="home">
            <Link to="/">
              <Icon type="home" />
Home
            </Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/playbook">
            <Playbook />
          </Route>
          <Route path="/roster">
            <Roster />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/tournament">
            <Tournament />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
