import React, {Component} from 'react';
import uuid from 'uuid';
import {Button, Form } from 'semantic-ui-react';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: {},
    }
  }


  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert("Title required");
    } else {
      this.setState({
        newTodo: {
          id: uuid.v4(),
          title: this.refs.title.value,
          description: this.state.value
        }
      }, function () {
        this.props.addTodo("todos" , this.state.newTodo);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Add Todo</h3>

          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Field>
              <label>Title</label>
              <input ref="title" placeholder='Enter a title for your todo...'/>
            </Form.Field>

            <Form.TextArea label="Description" placeholder='Enter a description for your todo...'
                           onChange={(e, {value}) => this.setState({value})}/>

            <Button color="green" type='submit'>Add Todo</Button>

          </Form>

      </div>
    );
  }
}

export default AddTodo;