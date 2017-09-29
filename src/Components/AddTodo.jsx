import React, { Component } from 'react';
import uuid from 'uuid';
import { Button, Checkbox, Form } from 'semantic-ui-react'

class AddTodo extends Component{

  constructor(){
    super();
    this.state = {
      newTodo: {}
    }
  }


  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title required");
    }else{
      this.setState({newTodo: {
        id: uuid.v4(),
        title: this.refs.title.value,
        description: this.refs.description.value
      }}, function(){
        this.props.addTodo(this.state.newTodo);
      });
    }
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <h3>Add Todo</h3>

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Title</label>
            <input ref="title" placeholder='Enter a title for your todo...' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input ref="description" placeholder='Enter a description for your todo...' />
          </Form.Field>
          <Button type='submit'>Add Todo</Button>
        </Form>

      </div>
    );
  }
}

export default AddTodo;