import React from 'react';
import ReactDOM from 'react-dom';
import ContactItem from '../../Components/Contacts/ContactItem';
import {shallow} from 'enzyme'

describe('Contacts', () => {
  it('renders without crashing', () => {
    const props = {
      onDelete: spy()
      contact= {id: uuid.v4(), name: "Ugle McUglesen", email: "Ugle@gmail.com", phone: "12345678"}
    }
    shallow(<ContactItem />)
  });
});
