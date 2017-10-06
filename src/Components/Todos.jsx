import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Switch, Route } from 'react-router-dom';

class Todos extends Component{

  deleteTodo(id){
    this.props.onDelete(id);
  }

  render(){

    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItem onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo}/>
        )
      });
    }

    return (

      <div className="Todo">
        <h3>My Todos</h3>
        {todoItems}
      </div>
    );
  }
}

export default Todos;