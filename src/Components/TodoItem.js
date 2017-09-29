import React, { Component } from 'react';

class TodoItem extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <li className="Todo">
        <b>{this.props.todo.title}</b>: {this.props.todo.description} <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>Remove</a>
      </li>
    );
  }
}

export default TodoItem;