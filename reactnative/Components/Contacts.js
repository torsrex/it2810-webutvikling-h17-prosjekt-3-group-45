import React from 'react';
import { Contact } from './Contact';
import { AddContact } from './AddContact';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Contacts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      contacts: [
        {name: "Tødden Tøddvik", email: "tødden@gmail.com", phone: "22334455"}
      ]
    }
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts:contacts});
  }

  render(){
    return(
      <View>
        <AddContact addContact={this.handleAddContact.bind(this)} />

        <Text>Your Contacts:</Text>
        {this.state.contacts.map(function(contact, index){
          return <Contact key={index} contactName={ contact.name } contactEmail={ contact.email } contactPhone={ contact.phone }/>
        })}
      </View>
    )
  }
}
