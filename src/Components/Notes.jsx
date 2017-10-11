import React, { Component } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

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
      <div className="Notes">
        <h3>My Notes</h3>
        <AddNote addNote={this.props.addNote} />
        {noteItems}
      </div>
    );
  }
}

export default Notes;
