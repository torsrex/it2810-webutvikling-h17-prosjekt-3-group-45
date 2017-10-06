import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class TodoItem extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){
    return (
      <li className="Todo">
        <b>{this.props.todo.title}</b>: {this.props.todo.description}&nbsp;&nbsp;
        <Button size="mini" color="teal" title="Edit" circular icon="write" onClick={this.deleteTodo.bind(this, this.props.todo.id)} />
        <Button size="mini" color="red" title="Delete" circular icon="trash outline" onClick={this.deleteTodo.bind(this, this.props.todo.id)} />
      </li>
    );
  }
}

export default TodoItem;