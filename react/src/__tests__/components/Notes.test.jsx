import React from 'react';
import ReactDOM from 'react-dom';
import Notes from '../../Components/Notes/Notes';
import NoteItem from '../../Components/Notes/NoteItem';
import AddNote from '../../Components/Notes/AddNote';
import uuid from 'uuid';
import {spy} from 'sinon'
import {Button} from "semantic-ui-react";
import { shallow, mount } from 'enzyme'


describe('Notes', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notes notes={[
      {id: uuid.v4(), title: 'Test notes', description: 'Check if notes crashes'}
    ]}/>, div);
  });

  it('renders AddNote component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddNote addNote={() => {}}/>, div);
  });

});

describe('deleteTodo', () => {

  it("deletes the note", () => {
    const props = {
      note: {
        id: "",
        description: "",
        title: ""
      },
      onDelete: spy()
    };
    const wrapper = shallow(<NoteItem {...props} />);
    wrapper.find(Button).simulate('click');
    expect(props.onDelete.calledOnce).toBe(true)
  });

  it('deletes mounted note', () => {
    const props = {
      note: {
        id: uuid.v4(),
        title: "Title",
        description: "Description"
      }
    };
    mount(<Notes {...props}/>)
  });

});
