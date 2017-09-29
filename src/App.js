import React, { Component } from 'react';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';
import { Contacts } from './Contacts';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "Users Name",
      todos: [],
      contacts: []
      // TODO: Set value from local storage
    }
  }

  componentWillMount(){
    this.setState({
      todos: [
      {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
      {id: uuid.v4(), title: 'Handle contacts', description: 'Ugle McUglesen \'boutta hook us up with contact info'},
      {id: uuid.v4(), title: 'Hans Vette', description: 'Slap him in the 4Head'}
      ],
      contacts: [
        {name: "Ugle McUglesen", email: "Ugle@gmail.com", phone: "12345678"},
        {name: "Tødden Tøddvik", email: "tødden@gmail.com", phone: "22334455"},
        {name: "Han Svette", email: "håvard@gmail.com", phone: "12121212"}
      ]
    });
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
    
  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts:contacts});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello { this.state.name }</h2>
        </div>

        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />

        <Contacts contacts={this.state.contacts} addContact={this.handleAddContact.bind(this)} />

      </div>
    );
  }
}

export default App;
