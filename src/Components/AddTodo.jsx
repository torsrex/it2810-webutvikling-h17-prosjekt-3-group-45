import React, { Component } from 'react';
import uuid from 'uuid';

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


        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Description</label><br />
            <input type="text" ref="description" />
          </div>
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddTodo;