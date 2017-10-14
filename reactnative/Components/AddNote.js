import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Form, TextInput } from 'react-native';
import uuid from 'uuid';

class AddNote extends Component{

  constructor(){
    super();
    this.state = {
      title: '',
      description : '',
      newNote: {}
    }
  }

  handleSubmit(e){
    if(this.state.title === ''){
      alert("Title required");
    }else{
      this.setState({newNote: {
        id: uuid.v4(),
        title: this.state.title,
        description: this.state.description
      }}, function(){
        this.props.addNote(this.state.newNote);
      });
  }
  }

  render(){
    return(
    <View style={styles.TextInput}>

    <Text> Here you can add a note! </Text>
    <TextInput
      label = "Title"
      placeholder = "Enter title to note!"
      onChangeText={(text) => this.setState({title:text})}
    />

    <TextInput
      multiline={true}
      label = "Description"
      placeholder = "Enter a description to note!"
      onChangeText={(text) => this.setState({description:text})}
    />

      <Button
        title = "Add note"
        onPress={() => this.handleSubmit()}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput : {
    justifyContent: 'center',
    alignSelf: 'center',
    width : 300,
    paddingTop : 50,
    paddingBottom: 30,
  },
});
export default AddNote;
