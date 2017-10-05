import React, { Component } from 'react';

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <li className="Note">
        <b>{this.props.note.title}</b>: {this.props.note.description} <a href="#" onClick={this.deleteNote.bind(this, this.props.note.id)}>  Remove note</a>
      </li>
    );
  }
}

export default NoteItem;
