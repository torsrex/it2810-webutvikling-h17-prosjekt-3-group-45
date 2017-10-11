import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Menu, Grid, Segment, Sticky } from 'semantic-ui-react';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';
import Contacts from './Contacts';
import { Calendar } from './BigCalendar'
import Todos from './Components/Todos.jsx';
import AddTodo from './Components/AddTodo.jsx';
import Notes from './Components/Notes.jsx';
import AddNote from './Components/AddNote.jsx';
import SetName from './Components/SetName';

import { Header, Icon, Image } from 'semantic-ui-react'
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      todos: [],
      notes: [],
      contacts: []
    }
  }

  componentWillMount(){
    const data = localStorage.getItem('squad');
    if (data){
      this.setState(JSON.parse(data))
    } else{
      this.setState({
        name: "",
        todos: [
        {id: uuid.v4(), title: 'Make todolist', description: 'Tødden Tøddvik has to make the todolist'},
        {id: uuid.v4(), title: 'Handle contacts', description: 'Ugle McUglesen \'boutta hook us up with contact info'},
        {id: uuid.v4(), title: 'Hans Vette', description: 'Slap him in the 4Head'}
        ],
        notes: [
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

  handleAddNote(note){
    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes: notes});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleDeleteNote(id){
    let notes = this.state.notes;
    let index = notes.findIndex(x => x.id === id);
    notes.splice(index, 1);
    this.setState({notes: notes});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts:contacts});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleSetName(name){
    this.setState({name:name});
    let state = this.state;
    state.name = name;
    localStorage.setItem('squad', JSON.stringify(state));
  }

  render() {
    if(this.state.name === ""){
      return(
        <SetName setName={this.handleSetName.bind(this)} />
      )
    }
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
          <Grid>

          <Navbar s={this.state}/>

          <Grid.Column stretched width={12}>
            <Segment>

              <div id="content">
                {/* VARIABLE CONTENT IS DISPLAYED HERE */}
                <Switch>
                  <Route exact path='/' render= {() => (
                    <Calendar />
                  )}/>
                  <Route exact path='/todos' render= {() => (
                    <Todos todos={this.state.todos} addTodo={this.handleAddTodo.bind(this)} onDelete={this.handleDeleteTodo.bind(this)} />
                  )}/>
                  <Route exact path='/contacts' render= {() => (
                    <Contacts contacts={this.state.contacts} addContact={this.handleAddContact.bind(this)} />
                  )}/>
                  <Route exact path='/notes' render= {() => (
                    <Notes notes={this.state.notes} addNote={this.handleAddNote.bind(this)} onDelete={this.handleDeleteNote.bind(this)}/>
                  )}/>
                </Switch>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
