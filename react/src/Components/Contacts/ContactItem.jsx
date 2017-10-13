import React from 'react';
import { List, Button } from 'semantic-ui-react';

export class Contact extends React.Component{

  deleteContact(id){
    this.props.onDelete(id);
  }

  render(){
      return(
          <div>

            <List>
              <List.Header>
                <h3>
                <List.Icon name='users' />
                {this.props.contact.name}&nbsp;&nbsp;
                  <Button size="mini" color="red" title="Delete" circular icon="trash outline" onClick={this.deleteContact.bind(this, this.props.contact.id)} />
                </h3>
              </List.Header>
              <List.Item>
                <List.Icon name='mail' />
                {this.props.contact.email}
              </List.Item>
              <List.Item>
                <List.Icon name='phone' />
                {this.props.contact.phone}
              </List.Item>
              &nbsp;
            </List>

          </div>
      )
  }
}
