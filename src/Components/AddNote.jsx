import React, { Component } from 'react';
import uuid from 'uuid';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class AddNote extends Component{

  constructor(){
    super();
    this.state = {
      newNote: {}
    }
  }


  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title required");
    }else{
      this.setState({newNote: {
        id: uuid.v4(),
        title: this.refs.title.value,
        description: this.refs.description.value
      }}, function(){
        this.props.addNote(this.state.newNote);
        this.sendThru.bind(this);
      });
  }

    e.preventDefault();

  }

  sendThru(){
    this.refs.title.value = '';
    this.refs.description.value='';
  }

  render(){
    return (
      <div>
        <h3>Add a note</h3>

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Title</label>
            <input ref="title" placeholder='Vil du ha ein note eller?' />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input ref="description" placeholder='Kva skal noten inneholde?' />
          </Form.Field>
          <Button type='submit'>Add Note</Button>
        </Form>

      </div>
    );
  }
}

export default AddNote;
