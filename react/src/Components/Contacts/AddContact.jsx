import React from 'react';
import uuid from 'uuid';
import { Button, Form } from 'semantic-ui-react'

export default class AddContact extends React.Component{
  constructor(){
    super();
    this.state= {
      newContact:{}
    }
  }

  invalidName(name){
    if(name === '' || name.length > 32){
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    if (this.invalidName(this.refs.name.value)) {
      alert("Contact name required");
    }
    else if(this.refs.email.value === '' && this.refs.phone.value === ''){
      alert("Email or phone number required");
    } else {
      this.setState({
        newContact: {
          id: uuid.v4(),
          name:this.refs.name.value,
          email:this.refs.email.value,
          phone:this.refs.phone.value
        }
      }, function () {
        this.props.addContact("contacts" , this.state.newContact);
      });
    }
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Add Contact</h1>

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Name</label>
            <input ref="name" placeholder='Enter your name...' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input ref="email" placeholder='Enter your email address...' />
          </Form.Field>
          <Form.Field>
            <label>Phone number</label>
            <input ref="phone" placeholder='Enter your phone number...' />
          </Form.Field>
          <Button color="green" type='submit'>Add Contact</Button>
        </Form>

      </div>
    )
  }
}
