import React from 'react';
import AddContact from '../../Components/Contacts/AddContact';
import {shallow} from 'enzyme'
import {spy} from 'sinon'


describe('AddContact', () => {
  it('should demand valid name', () => {
    const props = {
      addContact: spy()
    };
    const wrapper = shallow(<AddContact {...props}/>);
    const foo = wrapper.instance().invalidName('');
    expect(foo).toBe(true);
  });
});
