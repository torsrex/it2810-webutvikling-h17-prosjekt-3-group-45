import React, { Component } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import uuid from 'uuid';

import { StyleSheet, Text, View, Button } from 'react-native';

class Notes extends Component{
  constructor(props){
    super(props);
    this.state={
      notes: [
        {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'}
      ]
    }
  }

  handleAddNote(note){
    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes: notes});
  }

  handleDeleteNote(id){
    let notes = this.state.notes;
    let index = notes.findIndex(x => x.id === id);
    notes.splice(index, 1);
    this.setState({notes: notes});
  }

  render(){
    let noteItems;
    if(this.state.notes){
      noteItems = this.state.notes.map(note => {
        return(
          <NoteItem onDelete={this.handleDeleteNote.bind(this)} key={note.id} note={note}/>
        )
      });
    }

    return (
      <View>
        <AddNote addNote={this.handleAddNote.bind(this)}/>
        <Text>My Notes</Text>
        {noteItems}
      </View>
    );
  }
}

export default Notes;
