import React, { Component } from 'react';
import { Menu, Grid, Segment, Sticky } from 'semantic-ui-react';
import { Link, Switch, Route, Router } from 'react-router-dom';
import App from '../App';
import Todos from './Todos';
import Contacts from '../Contacts';
import Basic from '../BigCalendar';
import Notes from './Notes'

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      activeItem: 'calendar'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Grid.Column width={3}>
        <Sticky>

          <Menu fluid vertical tabular>
            <Link to='/'>
              <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                Calendar
              </Menu.Item>
            </Link>
            <Link to='/todos'>
              <Menu.Item name='todos' active={activeItem === 'todos'} onClick={this.handleItemClick}>
                Todos
              </Menu.Item>
            </Link>
            <Link to='/contacts'>
              <Menu.Item name='contacts' active={activeItem === 'contacts'} onClick={this.handleItemClick}>
                Contacts
              </Menu.Item>
            </Link>
            <Link to='/notes'>
              <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
                Notes
              </Menu.Item>
            </Link>
          </Menu>

        </Sticky>
      </Grid.Column>

    );
  }
}

export default Navbar;
