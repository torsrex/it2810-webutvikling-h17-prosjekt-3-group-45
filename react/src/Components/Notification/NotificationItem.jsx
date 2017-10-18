import React from 'react'
import { Message } from 'semantic-ui-react'
import moment from 'moment'

export class NotificationItem extends React.Component {

  render(){
    return(
      <Message.Item>
        {this.props.event.title}&nbsp;Starts:&nbsp;
        {moment(this.props.event.start).format("LLL")}
      </Message.Item>
    )
  }
}

export default NotificationItem;
