import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Header from './Header';
import Name from './Name';
import uuid from 'uuid';

import Todos from './Todos';
import AddTodo from './AddTodo';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: 'Jeff',
      todos: [
      {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
      {id: uuid.v4(), title: 'Handle contacts', description: 'Ugle McUglesen \'boutta hook us up with contact info'},
      {id: uuid.v4(), title: 'Hans Vette', description: 'Slap him in the 4Head'}
      ],
      contacts: []
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(name){
    this.setState({name: name});
  }

  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});
  }

  handleDeleteTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

  render() {
    if (this.state.name === '') {
      return (
        <View style={styles.container}>
          <Header />
          <Name name={this.state.name} changeName={this.handleNameChange}/>
        </View>
      );
    }
      return (
        <View style={styles.container}>
          <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
          <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
