import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import App from './App';
import Home from './home/Home';
import Contact from './contact/Contact';
import Playbook from './playbook/Playbook';
import Roster from './roster/Roster';
import Schedule from './schedule/Schedule';
import Tournament from './tournament/Tournament';

// setup
configure({ adapter: new Adapter() });

it('should navigate to home with / path', () => {
  jest.mock('react-router-dom/BrowserRouter', () => ({ children }) => <div>{children}</div>);

  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});

it('should navigate to contact with /contact path', () => {
  jest.mock('react-router-dom/BrowserRouter', () => ({ children }) => <div>{children}</div>);
  const wrapper = mount(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(Contact)).toHaveLength(1);
});

it('should navigate to home with /playbook path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/playbook']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(Playbook)).toHaveLength(1);
});

it('should navigate to home with /roster path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/roster']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(Roster)).toHaveLength(1);
});

it('should navigate to home with /schedule path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/schedule']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(Schedule)).toHaveLength(1);
});

it('should navigate to home with /tournament path', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/tournament']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(Tournament)).toHaveLength(1);
});
