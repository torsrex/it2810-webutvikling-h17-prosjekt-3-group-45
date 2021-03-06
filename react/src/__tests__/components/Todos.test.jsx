import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../../Components/Todos/Todos';
import TodoItem from '../../Components/Todos/TodoItem';
import AddTodo from '../../Components/Todos/AddTodo';
import uuid from 'uuid';


describe('Todos', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todos todos={[
      {id: uuid.v4(), title: 'Test todolist', description: 'Check if todolist crashes'}
    ]}/>, div);
  });

  it('renders AddTodo component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddTodo addTodo={() => {}}/>, div);
  });
});
