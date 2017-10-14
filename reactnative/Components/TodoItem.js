import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class TodoItem extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <View style={styles.TextInput}>
        <Text style={{fontWeight : 'bold'}}>{this.props.todo.title} : </Text>
        <Text>{this.props.todo.description} </Text>
        <Button color="red" title="Done" circular icon="trash outline" onPress={this.deleteTodo.bind(this, this.props.todo.id)} />
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

export default TodoItem;
