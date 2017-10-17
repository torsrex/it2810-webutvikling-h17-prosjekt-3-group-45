import React from 'react'
import NotificationItem from "./NotificationItem";

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
    return(
      <div>
        {notificationItems}
      </div>
    )
  }
}

export default Notification;
