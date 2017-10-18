import React from 'react';
import ReactDOM from 'react-dom';
import SetName from '../../Components/SetName';
import {shallow} from 'enzyme'


describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<SetName />)
  });
});
