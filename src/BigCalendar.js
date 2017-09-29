import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import events from 'events'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

//react-big-calendar/lib/css/react-big-calendar.css

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export class Basic extends React.Component{

  constructor(){
    super();
}

  render(){
    return (
      <BigCalendar
        {...this.props}
        events={[{'title': 'Lecture',
                  'start': new Date(2017, 9, 2, 13),
                  'end': new Date(2017, 9, 2, 15)
                  }]}
        views={allViews}
        defaultDate={new Date()}
      />
    );
  }
}

export default Basic;