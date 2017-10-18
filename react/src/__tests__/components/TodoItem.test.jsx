import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../../Components/Todos/Todos';
import TodoItem from '../../Components/Todos/TodoItem';
import AddTodo from '../../Components/Todos/AddTodo';

describe('TodoItem', () => {
  it('renders AddTodo correctly', () => {
    const li = document.createElement('li');
    ReactDOM.render(<AddTodo addTodo={() => {}}/>, li);
  });
});
