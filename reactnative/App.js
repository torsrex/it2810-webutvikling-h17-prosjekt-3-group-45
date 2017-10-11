import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import uuid from 'uuid';

import Header from './Components/Header';
import Name from './Components/Name';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Notes from './Components/Notes';
import AddNote from './Components/AddNote';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: 'Bortne',
      todos: [
      {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
      {id: uuid.v4(), title: 'Handle contacts', description: 'Ugle McUglesen \'boutta hook us up with contact info'},
      {id: uuid.v4(), title: 'Hans Vette', description: 'Slap him in the 4Head'}
      ],
      notes: [
        {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'}
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

  handleAddNote(note){
    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes: notes});
  }

  handleDeleteNote(id){
    let notes = this.state.notes;
    let index = notes.findIndex(x => x.id === id);
    notes.splice(index, 1);
    this.setState({notes: notes});
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
        <Text> Hello there {this.state.name} </Text>
        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
        <AddNote addNote={this.handleAddNote.bind(this)}/>
        <Notes notes={this.state.notes} onDelete={this.handleDeleteNote.bind(this)}/>
        </View>
      );
  }
}

//<AddTodo addTodo={this.handleAddTodo.bind(this)}/>
//<Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
