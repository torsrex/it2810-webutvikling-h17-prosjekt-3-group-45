import React from 'react';
import ReactDOM from 'react-dom';
import Notes from '../../Components/Notes/Notes';
import NoteItem from '../../Components/Notes/NoteItem';
import AddNote from '../../Components/Notes/AddNote';
import uuid from 'uuid';
import {shallow} from 'enzyme'


describe('Notes', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notes notes={[
      {id: uuid.v4(), title: 'Test notes', description: 'Check if notes crashes'}
    ]}/>, div);
  });
});
