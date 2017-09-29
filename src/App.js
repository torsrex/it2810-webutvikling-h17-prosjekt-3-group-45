import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Contacts } from './Contacts'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "Users Name",
      contacts: [
        {name: "Ugle McUglesen", email: "Ugle@gmail.com", phone: "12345678"},
        {name: "Tødden Tøddvik", email: "tødden@gmail.com", phone: "22334455"},
        {name: "Han Svette", email: "håvard@gmail.com", phone: "12121212"}
      ]
      // TODO: Set value from local storage
    }
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contacts contacts={this.state.contacts} addContact={this.handleAddContact.bind(this)} />
      </div>
    );
  }
}

export default App;
