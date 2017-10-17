import React, { Component } from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom'
import uuid from 'uuid';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import { Calendar } from './Components/Calendar/BigCalendar'
import Todos from './Components/Todos/Todos.jsx';
import Notes from './Components/Notes/Notes.jsx';
import SetName from './Components/SetName';
import Navbar from "./Components/Navbar";
import Notification from './Components/Notification/Notification.jsx'
import moment from 'moment'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      todos: [],
      notes: [],
      contacts: [],
      eventList:[]
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
          {id: uuid.v4(), title: 'This is a note', description: 'Take notes, kids'},
          {id: uuid.v4(), title: 'Shag me sideways', description: 'Granny bought me an apple'},
          {id: uuid.v4(), title: 'Flexbox', description: 'More like checkbox amirite? hehe_xd'}
        ],
        contacts: [
          {id: uuid.v4(), name: "Ugle McUglesen", email: "Ugle@gmail.com", phone: "12345678"},
          {id: uuid.v4(), name: "Tødden Tøddvik", email: "tødden@gmail.com", phone: "22334455"},
          {id: uuid.v4(), name: "Han Svette", email: "håvard@gmail.com", phone: "12121212"}
        ],
        eventList:[{
          'id'    :  uuid.v4(),
          'title' : 'Evaluate other students project',
          'start' : '2017-10-16 15:00:00',
          'end'   : '2017-10-16 17:00:00'
        },{
          'id'    :  uuid.v4(),
          'title' : 'Give group 45 full score',
          'start' : '2017-10-16 18:00:00',
          'end'   : '2017-10-16 20:00:00'
        }]
      });
    }
  }


  componentDidMount(){
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleAdd(key, value){
    let oldVals
    if (key === "contacts"){
      oldVals = this.state.contacts;
    } else if (key === "todos") {
      oldVals = this.state.todos;
    } else if (key === "notes") {
      oldVals = this.state.notes;
    } else {
      console.log(key + " is not a value in this.state");
    }
    oldVals.push(value);
    this.setState({key} : oldVals);
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleDelete(key, id){
    let oldVals;
    let index;
    if (key === "todos") {
      oldVals = this.state.todos;
      index = oldVals.findIndex(x => x.id === id);
    } else if (key === "notes") {
      oldVals = this.state.notes;
      index  = oldVals.findIndex(x => x.id === id);
    } else if (key === "contacts") {
      oldVals = this.state.contacts;
      index  = oldVals.findIndex(x => x.id === id);
    } else {
      console.log(key + " is not a value in this.state");
    }
    oldVals.splice(index, 1);
    this.setState({key}: oldVals);
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleSetName(name){
    this.setState({name:name});
    let state = this.state;
    state.name = name;
    localStorage.setItem('squad', JSON.stringify(state));
  }
  getUpcommingEvents() {
    let eventList = this.state.eventList;
    let fromDate = moment().subtract(10, 'minute');
    let toDate = moment().add(10, 'minute');
    let upcommingEvents = [];
    let i;
    let len = eventList.length;
    for (i = 0; i < len; i++) {
      let startDate = moment(eventList[i].start);
      if (startDate.isBetween(fromDate, toDate)) {
        upcommingEvents.push(eventList[i]); //Need entire object
      }
    }
    return upcommingEvents;
  }
  handleAddEvent(event){
    let events = this.state.eventList;
    events.push(event);
    this.setState({eventList:events});
    localStorage.setItem('squad', JSON.stringify(this.state));
  }

  handleRemoveEvent(event){
    let updatedEvent = this.state.eventList;
    for(let i = 0; i < updatedEvent.length; i++){
      if(updatedEvent[i].id === event.id){
        updatedEvent.splice(i, 1);
      }
    }
    this.setState({ eventList : updatedEvent });
    localStorage.setItem('squad', JSON.stringify(this.state));
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
        {/* Notification component goes here */}
        <Notification events={this.getUpcommingEvents()}/>
        <Grid>
          <Navbar s={this.state}/>
          <Grid.Column stretched width={12}>
            <Segment>

              <div id="content">
                {/* VARIABLE CONTENT IS DISPLAYED HERE */}
                <Switch>
                  <Route exact path='/' render= {() => (
                    <Calendar events={this.state.eventList}
                              addEvent={this.handleAddEvent.bind(this)}
                              rmEvent={this.handleRemoveEvent.bind(this)}/>
                  )}/>
                  <Route exact path='/todos' render= {() => (
                    <Todos todos={this.state.todos} addTodo={this.handleAdd.bind(this)} />
                  )}/>
                  <Route exact path='/contacts' render= {() => (
                    <Contacts contacts={this.state.contacts}
                              addContact={this.handleAdd.bind(this)}
                              onDelete={this.handleDelete.bind(this)} />
                  )}/>
                  <Route exact path='/notes' render= {() => (
                    <Notes notes={this.state.notes}
                           addNote={this.handleAdd.bind(this)}
                           onDelete={this.handleDelete.bind(this)}/>
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
