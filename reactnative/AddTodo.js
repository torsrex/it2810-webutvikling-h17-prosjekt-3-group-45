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
    if (this.refs.title.value === '') {
      alert("Title required");
    } else {
      this.setState({
        newTodo: {
          id: uuid.v4(),
          title: this.refs.title.value,
          description: this.state.value
        }
      }, function () {
        this.props.addTodo(this.state.newTodo);
      });
    }
    e.preventDefault();
  }

  _handlePress() {
   console.log(this.state.title);
   console.log(this.state.description);
}

  render() {
    return(
    <View style={styles.TextInput}>

    <Text> Here you can add a todo! </Text>
    <TextInput
      label = "Title"
      placeholder = "Enter title!"
      onChangeText={(text) => this.setState({title:text})}
    />

    <TextInput
      multiline={true}
      label = "Description"
      placeholder = "Enter a description to todo!"
      onChangeText={(text) => this.setState({description:text})}
    />

      <Button
        title = "Add todo"
        onPress={() => this._handlePress()}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput : {
    flex : 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width : 350,
    paddingTop : 10,
  },
});

export default AddTodo;
