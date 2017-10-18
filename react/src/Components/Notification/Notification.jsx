import React from 'react'
import NotificationItem from "./NotificationItem";
import { Message } from 'semantic-ui-react'

export class Notification extends React.Component {

  render(){
    let notificationItems;
    if(this.props.events){
      notificationItems = this.props.events.map(event => {
        return(
          <NotificationItem event={event}/>
        )
      })
    }
    if(this.props.events.length > 0){
      return(
        <div>
          <Message size="huge" color="teal">
            <Message.List>
              {notificationItems}
            </Message.List>
          </Message>
        </div>
      )
    }else{
      return(
        <div>

        </div>
      )
    }

  }
}

export default Notification;
