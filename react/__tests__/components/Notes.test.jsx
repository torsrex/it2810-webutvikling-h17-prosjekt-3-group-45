import React from 'react';
import ReactDOM from 'react-dom';
import Notes from '../../src/Components/Notes/Notes';
import NoteItem from '../../src/Components/Notes/NoteItem';
import AddNote from '../../src/Components/Notes/AddNote';
import uuid from 'uuid';


describe('Notes', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notes notes={[
      {id: uuid.v4(), title: 'Test notes', description: 'Check if notes crashes'}
    ]}/>, div);
  });
});

