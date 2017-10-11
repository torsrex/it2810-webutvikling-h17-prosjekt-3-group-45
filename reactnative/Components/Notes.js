import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { StyleSheet, Text, View, Button } from 'react-native';

class Notes extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){

    let noteItems;
    if(this.props.notes){
      noteItems = this.props.notes.map(note => {
        return(
          <NoteItem onDelete={this.deleteNote.bind(this)} key={note.id} note={note}/>
        )
      });
    }

    return (
      <View>
        <Text>My Notes</Text>
        {noteItems}
      </View>
    );
  }
}

export default Notes;
