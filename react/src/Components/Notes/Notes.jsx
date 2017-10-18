import React, { Component } from 'react';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

class Notes extends Component{

  render(){

    let noteItems;
    if(this.props.notes){
      noteItems = this.props.notes.map(note => {
        return(
          <NoteItem onDelete={(id) => this.props.onDelete("notes", id)} key={note.id} note={note}/>
        )
      });
    }

    return (
      <div className="Notes">
        <h3>My Notes</h3>
        {noteItems}<br />
        <AddNote addNote={this.props.addNote} />
      </div>
    );
  }
}

export default Notes;
