import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { List } from 'semantic-ui-react';


class Todos extends Component{

  render(){
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItem onDelete={(id) => this.props.onDelete("todos", id)} key={todo.id} todo={todo}/>
        )
      });
    }

    return (
      <div className="Todos">
        <List className="TodoList">
        <h3>My Todos</h3>
        {todoItems}<br />
        <AddTodo addTodo={this.props.addTodo} />
        </List>
      </div>
    );
  }
}

export default Todos;