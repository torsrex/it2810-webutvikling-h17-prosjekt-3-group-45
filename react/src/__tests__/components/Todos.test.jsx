import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../../Components/Todos/Todos';
import TodoItem from '../../Components/Todos/TodoItem';
import AddTodo from '../../Components/Todos/AddTodo';
import uuid from 'uuid';
import {spy} from 'sinon'
import {Button} from "semantic-ui-react";
import { shallow, mount } from 'enzyme';


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

describe('deleteTodo', () => {

  it("deletes the todo", () => {
    const props = {
      todo: {
        id: "",
        description: "",
        title: ""
      },
      onDelete: spy()
    };
    const wrapper = shallow(<TodoItem {...props} />);
    wrapper.find(Button).simulate('click');
    expect(props.onDelete.calledOnce).toBe(true)
  });

  it('deletes mounted todo', () => {
    const props = {
      todo: {
        id: uuid.v4(),
        title: "Title",
        description: "Description"
      }
    };
    mount(<Todos {...props}/>)
  });

});
