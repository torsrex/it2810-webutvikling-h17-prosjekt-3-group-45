import React from 'react';
import ContactItem from './ContactItem';
import AddContact from './AddContact';

export default class Contacts extends React.Component{

  render(){

    let contactItems;
    if(this.props.contacts){
      contactItems = this.props.contacts.map(contact => {
        return(
          <ContactItem onDelete={(id) => this.props.onDelete("contacts", id)} key={contact.id} contact={contact}/>
        )
      });
    }

    return (
      <div className="Contacts">
        <h3>My Contacts</h3>
        {contactItems}<br />
        <AddContact addContact={this.props.addContact} />
      </div>
    );
  }

}
