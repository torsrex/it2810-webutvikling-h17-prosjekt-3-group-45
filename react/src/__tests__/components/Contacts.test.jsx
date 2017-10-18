import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from '../../Components/Contacts/Contacts';
import AddContact from '../../Components/Contacts/AddContact';
import ContactItem from '../../Components/Contacts/ContactItem';
import uuid from 'uuid';
import { spy } from 'sinon'
import { Button } from "semantic-ui-react";
import { shallow, mount } from 'enzyme'


describe('Contacts', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contacts contacts={[
      {id: uuid.v4(), name: 'Name McNameson', email: 'email@gmail.com', phone: 48480059}
    ]}/>, div);
  });

  it('renders AddContact component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddContact addContact={() => {}}/>, div);
  });

});

describe('deleteContact', () => {

  it("deletes the contact", () => {
    const props = {
      contact: {
        id: uuid.v4(),
        name: "Name McName",
        email: "email@gmail.com",
        phone: 94242342
      },
      onDelete: spy()
    };
    const wrapper = shallow(<ContactItem {...props} />);
    wrapper.find(Button).simulate('click');
    expect(props.onDelete.calledOnce).toBe(true)
  });

  it('deletes mounted contact', () => {
    const props = {
      contact: {
        id: uuid.v4(),
        name: "Name McName",
        email: "email@gmail.com",
        phone: 94242342
      }
    };
    mount(<Contacts {...props}/>)
  });

});
