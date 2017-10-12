import React from 'react';
import { Contact } from './Contact';
import { AddContact } from './AddContact';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Contacts extends React.Component{
  render(){
    return(
      <View>
        <AddContact addContact={this.props.addContact} />
        
        <Text>Your Contacts:</Text>
        {this.props.contacts.map(function(contact, index){
          return <Contact key={index} contactName={ contact.name } contactEmail={ contact.email } contactPhone={ contact.phone }/>
        })}
      </View>
    )
  }
}
