import React, { Component } from 'react';
import { Contact } from './Contact';

export class Contacts extends React.Component{
  render(){
  return(

    <div>
    <h2>Your contacts:</h2>

    {this.props.contacts.map(function(contact, index){
      return <Contact contactName={ contact.name } contactEmail={ contact.email } contactPhone={ contact.phone }/>
    })}

    </div>
  )
  }
}
