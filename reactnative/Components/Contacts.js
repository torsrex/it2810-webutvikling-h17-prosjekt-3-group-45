import React from 'react';
import { Contact } from './Contact';
import { AddContact } from './AddContact';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import uuid from 'uuid';

export default class Contacts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      contacts: [
        {id : uuid.v4(), name: "Tødden Tøddvik", email: "tødden@gmail.com", phone: "22334455"},
        {id : uuid.v4(),name: "Kristian Bortne", email : "kristian@gmail.com", phone: "75830144"}
      ]
    }
  }

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({contacts:contacts});
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    this.setState({contacts: contacts});
  }

  render(){
    let Contacts;
    if(this.state.contacts){
      Contacts = this.state.contacts.map(contact => {
        return(
          <Contact onDelete={this.handleDeleteContact.bind(this)} key={contact.id} contact={contact}/>
        )
      });
    }

    return(
      <ScrollView style={styles.TextInput}>
        <AddContact addContact={this.handleAddContact.bind(this)} />
        {Contacts}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  TextInput : {
    flex : 1,
    alignSelf : 'flex-start',
    paddingLeft: 20,
    paddingRight : 20,
  },
});
