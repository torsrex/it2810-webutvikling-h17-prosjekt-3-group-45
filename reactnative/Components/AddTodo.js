import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Form, TextInput } from 'react-native';
//import {Checkbox, Form, Grid, Container} from 'semantic-ui-react';
import uuid from 'uuid';

class AddTodo extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description : '',
      newTodo: {},
    }
  }


  handleSubmit(e) {
    if (this.state.title === '') {
      alert("Title required");
    }
    else {
        this.setState({
          newTodo: {
            id: uuid.v4(),
            title: this.state.title,
            description: this.state.description
          }
        }, function () {
          this.props.addTodo(this.state.newTodo);
          this.setState({title : '', description: ''})
          this.textInputRef1.clear();
          this.textInputRef2.clear();
        });
    }
}


  render() {
    return(
    <View style={styles.TextInput}>

    <Text> Here you can add a todo! </Text>
    <TextInput
      label = "Title"
      placeholder = "Enter title!"
      autoCapitalize = 'sentences'
      onChangeText={(text) => this.setState({title:text})}
      ref={ref => this.textInputRef1 = ref}
      value={this.state.title}
    />

    <TextInput
      label = "Description"
      placeholder = "Enter a description to todo!"
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
        title = "Add todo"
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

export default AddTodo;
