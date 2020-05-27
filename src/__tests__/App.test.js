import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../app.js';


it('renders app component without crashing', () => {
  shallow(<App />);
});

it('renders entire app without crashing', () => {
  mount(<App />);
});
