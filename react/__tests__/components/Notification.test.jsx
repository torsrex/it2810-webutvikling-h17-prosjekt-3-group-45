import React from 'react';
import ReactDOM from 'react-dom';
import Notification from '../../src/Components/notification/Notification';
import NotificationItem from '../../src/Components/notification/NotificationItem';
import NoteItem from '../../src/Components/Notes/NoteItem';
import uuid from 'uuid';
import { Message } from 'semantic-ui-react'


describe('Notification', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notification
      events={[{
        'id'    :  uuid.v4(),
        'title' : 'Evaluate other students project',
        'start' : '2017-10-16 15:00:00',
        'end'   : '2017-10-16 17:00:00'
      }]}
      />, div);
  });
});
