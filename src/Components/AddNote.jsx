import React, { Component } from 'react';
import uuid from 'uuid';
import { Button, Form } from 'semantic-ui-react';

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
      this.setState({
        newNote: {
        id: uuid.v4(),
        title: this.refs.title.value,
        description: this.state.value
      }}, function(){
        this.props.addNote(this.state.newNote);
        // this.sendThru.bind(this);
      });
  }
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <h3>Add Note</h3>

        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <label>Title</label>
            <input ref="title" placeholder='Enter a title for your note...' />
          </Form.Field>

          <Form.TextArea label="Description" placeholder='Enter a description for your note...'
                         onChange={(e, {value}) => this.setState({value})}/>

          <Button color="green" type='submit'>Add Note</Button>

        </Form>

      </div>
    );
  }
}

export default AddNote;
