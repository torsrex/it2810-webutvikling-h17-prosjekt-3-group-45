import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <View>
        <Text> {this.props.note.title} : {this.props.note.description}
        </Text>
      </View>
    );
  }
}

export default NoteItem;
