import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../../Components/Contacts/Contacts';
import ContactItem from '../../Components/Contacts/ContactItem';
import AddContact from '../../Components/Contacts/AddContact';
import uuid from 'uuid';
import {shallow} from 'enzyme'


describe('Contacts', () => {
  it('renders without crashing', () => {
/*
    const div = document.createElement('div');
    ReactDOM.render(<Contacts contacts={[
      {id: uuid.v4(), name: "Test Contact", email: "testEmail@gmail.com", phone: "55548892"}
    ]}/>, div);
    */
    shallow(<Contacts />)
  });
});
