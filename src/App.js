import React, { Component } from 'react';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';
import { Contacts } from './Contacts';
import { Basic } from './BigCalendar'
import Todos from './Components/Todos.jsx';
import AddTodo from './Components/AddTodo.jsx';

import { Header, Icon, Image } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      todos: [],
      contacts: []
    }
  }

  componentWillMount(){
    const data = localStorage.getItem('squad');
    if (data){
      this.setState(JSON.parse(data))
    } else{
      this.setState({
        name: "Username",
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
  }


  componentDidMount(){
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleAddTodo(todo){
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos: todos});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleDeleteTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({todos: todos});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts:contacts});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header as='h2' icon textAlign='center'>
            <Icon name='calendar' circular />
            <Header.Content>
              Hello { this.state.name }
            </Header.Content>
          </Header>
        </div>
        <Basic/>
        <AddTodo addTodo={this.handleAddTodo.bind(this)}/>
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
        <Contacts contacts={this.state.contacts} addContact={this.handleAddContact.bind(this)} />
      </div>
    );
  }
}

export default App;
