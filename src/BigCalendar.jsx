import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Form } from 'semantic-ui-react';
import { BigInputMoment } from 'react-input-moment';
import './input-moment.min.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export class Calendar extends React.Component{

  constructor(props){
    super(props);
    this.state={
      eventList : [],
      editModalShow : false,
      addModalShow : false,
      currentEvent : {'title':'placeholer',
        'start': new Date(),
        'end': new Date()},
      bigInputMomentStart : moment(),
      bigInputMomentEnd : moment(),
      locale: 'en',
      moment: moment(),
      currentEventTitle:''

    }
  }
  updateEventTitle(evt) {
    this.setState({
      currentEventTitle: evt.target.value
    });
  }

  addEventFromButton(start, end){
    if(start.isAfter(end)){
      alert("Start time must not be after end time");
      return
    }else if(this.state.currentEventTitle === ''){
      alert("Event must have a title");
      return
    }
    let startTime = start.format().substring(11,19).split(':');
    let endTime = end.format().substring(11,19).split(':');

    let startDate = start.format().substring(0,10).split('-');
    let endDate = end.format().substring(0,10).split('-');

    let newEvent = this.state.eventList;
    newEvent.push({
      'title': this.state.currentEventTitle,
      'start': new Date(Number(startDate[0]), Number(startDate[1]) - 1, Number(startDate[2]),
        Number(startTime[0]), Number(startTime[1]), Number(startTime[2])),

      'end': new Date(Number(endDate[0]), Number(endDate[1]) - 1, Number(endDate[2]),
        Number(endTime[0]), Number(endTime[1]), Number(endTime[2]))
    });
    this.setState({ eventList : newEvent, addModalShow : false });
    this.closeAdd();
  }

  addEvent(info) {
    let startTime = info.start.toTimeString().substring(0, 8).split(':');
    let startDate = info.start.toLocaleDateString().split('/');
    let endTime = info.end.toTimeString().substring(0, 8).split(':');
    let endDate = info.end.toLocaleDateString().split('/');

    let newEvent = this.state.eventList;
    newEvent.push({'title': 'new event!',
      'start': new Date(Number(startDate[2]), Number(startDate[0])-1, Number(startDate[1]),
        Number(startTime[0]), Number(startTime[1])),

      'end':   new Date(Number(endDate[2]), Number(endDate[0])-1, Number(endDate[1]),
        Number(endTime[0]), Number(endTime[1])),
    });
    this.setState({eventList:newEvent});
  }

  close = () => this.setState({ editModalShow: false });
  openAdd = () => this.setState({addModalShow : true});
  closeAdd = () => this.setState({addModalShow : false});
  removeEvent(event){
    let updatedEvent = this.state.eventList;
    for(let i = 0; i < updatedEvent.length; i++){
      if(updatedEvent[i] === event){
        updatedEvent.splice(i, 1);
      }
    }
    this.close();
  }
  editEvent(clickedEvent) {
    this.setState({currentEvent : null});
    this.setState({editModalShow: true});
    this.setState({currentEvent: clickedEvent});
  }

  render(){
    let wrapperClass = 'wrappermedium';
    return (
      <div {...this.props}>
        <h3 className="callout">
          Click an event to see more info, or
          drag the mouse over the calendar to select a date/time range.
        </h3>
        <Modal trigger={<Button positive onClick={this.openAdd}>Add Event</Button>}
               header="Plan new Event"
               open = {this.state.addModalShow}
               closeOnEscape = {this.closeAdd}
               closeOnDimmerClick = {this.closeAdd}
               >

          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Event name</label>
                <input placeholder="example: Lecture"
                       value={this.state.currentEventTitle}
                       onChange={evt => this.updateEventTitle(evt)}
                />
              </Form.Field>
              <Form.Field>
                <label>Start Date</label>
                <input
                  className="output"
                  type="text"
                  value={this.state.bigInputMomentStart.format('LLLL')}
                  readOnly
                />
                <div className={wrapperClass}>
                  <BigInputMoment
                    moment={this.state.bigInputMomentStart}
                    locale={this.state.locale}
                    onChange={momStart => this.setState({bigInputMomentStart: momStart})}
                  />
                </div>
              </Form.Field>
              <Form.Field>
                <label>End Date</label>
                <input
                  className="output"
                  type="text"
                  value={this.state.bigInputMomentEnd.format('LLLL')}
                  readOnly
                />
                <div className={wrapperClass}>
                  <BigInputMoment
                    moment={this.state.bigInputMomentEnd}
                    locale={this.state.locale}
                    onChange={momEnd => this.setState({bigInputMomentEnd: momEnd})}
                  />
                </div>
              </Form.Field>
              <Button negative onClick={this.closeAdd}>Cancel</Button>
              <Button positive onClick={() => this.addEventFromButton(
                this.state.bigInputMomentStart,
                this.state.bigInputMomentEnd
              )}
              >Confirm</Button>
            </Form>
          </Modal.Content>
        </Modal>
        <BigCalendar
          selectable
          events={this.state.eventList}
          defaultView='week'
          defaultDate={new Date()}
          onSelectEvent={(event) => this.editEvent(event)}
          onSelectSlot={(info) => this.addEvent(info)}
        />
        <Modal open={this.state.editModalShow}>
          <Modal.Content>
            <Modal.Description>
              <h3>Event name: {this.state.currentEvent.title}</h3>
            </Modal.Description>
            <Modal.Content>
              <p>Start: {this.state.currentEvent.start.toLocaleDateString()}&nbsp;{this.state.currentEvent.start.toLocaleTimeString()}</p>
              <p>End: {this.state.currentEvent.end.toLocaleDateString()}&nbsp;{this.state.currentEvent.end.toLocaleTimeString()}</p>
              <br/>
            </Modal.Content>
            <Button color='yellow' onClick={this.close}>Close</Button>
            <Button negative onClick={(evt) => this.removeEvent(this.state.currentEvent)}>Remove Event</Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default Calendar;
