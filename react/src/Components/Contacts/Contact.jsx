import React from 'react';
import { List, Icon } from 'semantic-ui-react';

export class Contact extends React.Component{
    render(){
        return(
            <div>

              <List>
                <List.Header>
                  <h3>
                  <List.Icon name='users' />
                  {this.props.contactName}
                  </h3>
                </List.Header>
                <List.Item>
                  <List.Icon name='mail' />
                  {this.props.contactEmail}
                </List.Item>
                <List.Item>
                  <List.Icon name='phone' />
                  {this.props.contactPhone}
                </List.Item>
                &nbsp;
              </List>

            </div>
        )
    }
}
