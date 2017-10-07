import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export class AddContact extends React.Component{
  constructor(){
    super();
    this.state= {
      newContact:{}
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({newContact:{
      name:this.refs.name.value,
      email:this.refs.email.value,
      phone:this.refs.phone.value
    }}, function(){
      this.props.addContact('contacts', this.state.newContact);
    });
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
          <Button type='submit'>Add Contact</Button>
        </Form>

      </div>
    )
  }
}
