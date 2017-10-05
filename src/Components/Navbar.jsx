import React, { Component } from 'react';
import { Menu, Grid, Segment, Sticky } from 'semantic-ui-react';
import { Link, Switch, Route, Router } from 'react-router-dom';
import App from '../App';
import Todos from './Todos';
import Contacts from '../Contacts';
import Basic from '../BigCalendar';

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
      <div className="App">
        <Grid>
          {/* Sticky sidebar */}
          <Grid.Column width={3}>
            <Sticky>

              <Menu fluid vertical tabular>
                <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                  <Link to='/'>Calendar</Link>
                </Menu.Item>
                <Menu.Item name='todos' active={activeItem === 'todos'} onClick={this.handleItemClick}>
                  <Link to='/todos'>Todos</Link>
                </Menu.Item>
                <Menu.Item name='contacts' active={activeItem === 'contacts'} onClick={this.handleItemClick}>
                  <Link to='/contacts'>Contacts</Link>
                </Menu.Item>
                <Menu.Item name='notes' active={activeItem === 'notes'} onClick={this.handleItemClick}>
                  <Link to='/notes'>Notes</Link>
                </Menu.Item>
              </Menu>

            </Sticky>
          </Grid.Column>

          {/* Content to the right of sidebar */}
          <Grid.Column stretched width={12}>
            <Segment>

              {/*<Router>*/}
                {/*<Route exact path='/' component={Basic}/>*/}
                {/*<Route path='/todos' component={Todos}/>*/}
                {/*<Route path='/contacts' component={Contacts}/>*/}
              {/*</Router>*/}

              <div id="content">
                {/* VARIABLE CONTENT IS DISPLAYED HERE */}

              </div>

            </Segment>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default Navbar;
