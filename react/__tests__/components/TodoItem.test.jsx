import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../../src/Components/Todos/Todos';
import TodoItem from '../../src/Components/Todos/TodoItem';
import AddTodo from '../../src/Components/Todos/AddTodo';

describe('TodoItem', () => {
  it('renders AddTodo correctly', () => {
    const li = document.createElement('li');
    ReactDOM.render(<AddTodo addTodo={() => {}}/>, li);
  });
});
