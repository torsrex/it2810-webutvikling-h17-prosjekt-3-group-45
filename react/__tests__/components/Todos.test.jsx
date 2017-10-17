import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../../src/Components/Todos/Todos';
import TodoItem from '../../src/Components/Todos/TodoItem';
import AddTodo from '../../src/Components/Todos/AddTodo';
import uuid from 'uuid';


describe('Todos', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todos todos={[
      {id: uuid.v4(), title: 'Test todolist', description: 'Check if todolist crashes'}
    ]}/>, div);
  });
});

