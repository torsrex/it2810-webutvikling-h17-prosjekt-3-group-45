import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
import "./todos.css";

class TodoItem extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){
    return (
        <List.Item className="Todo">
          <b>{this.props.todo.title}</b>: {this.props.todo.description}&nbsp;&nbsp;
          <Button size="mini" color="red" title="Delete" circular icon="trash outline" onClick={this.deleteTodo.bind(this, this.props.todo.id)} />
        </List.Item>
    );
  }
}

export default TodoItem;