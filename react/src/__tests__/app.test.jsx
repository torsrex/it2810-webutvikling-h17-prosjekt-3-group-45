import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import {shallow} from 'enzyme'

describe('App', () => {
  it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
  });
  shallow(<App />)
});
