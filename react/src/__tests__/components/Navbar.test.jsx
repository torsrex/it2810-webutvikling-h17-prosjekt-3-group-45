import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../Components/Navbar';
import {shallow} from 'enzyme'


describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />)
  });
});
