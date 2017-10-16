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
        this.setState({title : '', description: ''})
        this.textInputRef1.clear();
        this.textInputRef2.clear();
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
      autoCapitalize = 'sentences'
      onChangeText={(text) => this.setState({title:text})}
      ref={ref => this.textInputRef1 = ref}
      value={this.state.title}
    />

    <TextInput
      label = "Description"
      placeholder = "Enter a description to note!"
      autoCapitalize = 'sentences'
      onChangeText={(text) => this.setState({description:text})}
      onSubmitEditing={(event) => {
        this.handleSubmit();
        keyboardType = 'none'
      }}
      ref={ref => this.textInputRef2 = ref}
      value={this.state.description}
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
