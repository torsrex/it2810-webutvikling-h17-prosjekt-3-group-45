import React from 'react';
import { Contact } from './Contact';
import { AddContact } from './AddContact';

export class Contacts extends React.Component{
  render(){
    return(
      <div>
        <h2>Your contacts:</h2>

        {this.props.contacts.map(function(contact, index){
          return <Contact key={index} contactName={ contact.name } contactEmail={ contact.email } contactPhone={ contact.phone }/>
        })}

        <AddContact addContact={this.props.addContact} />
      </div>
    )
  }
}
