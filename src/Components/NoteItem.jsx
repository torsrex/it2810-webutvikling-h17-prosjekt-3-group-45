import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <li className="Note">
        <b>{this.props.note.title}</b>: {this.props.note.description}&nbsp;&nbsp;
        <Button size="mini" color="teal" title="Edit" circular icon="write" onClick={this.deleteNote.bind(this, this.props.note.id)} />
        <Button size="mini" color="red" title="Delete" circular icon="trash outline" onClick={this.deleteNote.bind(this, this.props.note.id)} />
      </li>
    );
  }
}

export default NoteItem;
