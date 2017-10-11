import React, { Component } from 'react';
//import { Button } from 'semantic-ui-react';
import { StyleSheet, Text, View, Button } from 'react-native';

class TodoItem extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <View>
        <Text> {this.props.todo.title} : {this.props.todo.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput : {
    flex : 1,
    alignSelf: 'center',
  },
});

export default TodoItem;
