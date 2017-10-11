import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { StyleSheet, Text, View, Button } from 'react-native';

class Todos extends React.Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){

    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo}/>
        )
      });
    }

    return (
      <View>
        <Text>My Todos</Text>
        {todoItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput : {
    flex : 1,
    justifyContent: 'center',
    alignSelf : 'center',
  },
});

export default Todos;
