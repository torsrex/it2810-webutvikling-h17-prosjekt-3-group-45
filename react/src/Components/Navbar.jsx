import React, { Component } from 'react';
import { Menu, Grid, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      activeItem: 'calendar'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu fluid widths={4} pointing secondary stackable>
          <Menu.Item as={Link} to='/' name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
            Calendar
          </Menu.Item>
          <Menu.Item as={Link} to='/todos' name='todos' active={activeItem === 'todos'} onClick={this.handleItemClick}>
            Todos
          </Menu.Item>
          <Menu.Item as={Link} to='/contacts' name='contacts' active={activeItem === 'contacts'} onClick={this.handleItemClick}>
            Contacts
          </Menu.Item>
          <Menu.Item as={Link} to='/notes' name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
            Notes
          </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
