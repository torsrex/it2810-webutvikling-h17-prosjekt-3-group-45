import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class NoteItem extends Component{

  deleteNote(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <View style={styles.TextInput}>
        <Text style={{fontWeight : 'bold'}} >{this.props.note.title} : </Text>
        <Text>{this.props.note.description}</Text>
        <Button color="red" title="Delete" circular icon="trash outline" onPress={this.deleteNote.bind(this, this.props.note.id)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput : {
    paddingLeft: 20,
    paddingTop: 20,
  },
});

export default NoteItem;
