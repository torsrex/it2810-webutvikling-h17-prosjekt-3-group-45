import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <List>
        <List.Item className="Note">
          <b>{this.props.note.title}</b>: {this.props.note.description}&nbsp;&nbsp;
          <Button size="mini" color="red" title="Delete" circular icon="trash outline" onClick={this.deleteNote.bind(this, this.props.note.id)} />
        </List.Item>
      </List>
    );
  }
}

export default NoteItem;
