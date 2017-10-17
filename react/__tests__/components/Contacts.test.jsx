import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../../src/Components/Contacts/Contacts';
import ContactItem from '../../src/Components/Contacts/ContactItem';
import AddContact from '../../src/Components/Contacts/AddContact';
import uuid from 'uuid';


describe('Contacts', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contacts contacts={[
      {id: uuid.v4(), name: "Test Contact", email: "testEmail@gmail.com", phone: "55548892"}
    ]}/>, div);
  });
});

