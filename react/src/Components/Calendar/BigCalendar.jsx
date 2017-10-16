import React  from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import uuid from 'uuid';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button, Form } from 'semantic-ui-react';
import { BigInputMoment } from 'react-input-moment';
import './input-moment.min.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export class Calendar extends React.Component{
  constructor(){
    super();
    this.state={
      editModalShow : false,
      addModalShow : false,
      afterPopupModal : false,
      currentEvent : {
        'id' : 123,
        'title':'placeholer',
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
    let newEvent = {
      'id'   : uuid.v4(),
      'title': this.state.currentEventTitle,
      'start': start.toDate(),
      'end'  : end.toDate()
    };

    this.setState({ currentEvent : newEvent, addModalShow : false },
                  function () {
                    this.props.addEvent(this.state.currentEvent);
                  });
    this.closeAdd();
  }

  preAddEvent(event){
    this.setState({ currentEvent:event, afterPopupModal:true });
  }

  addEvent(event) {
    let title = this.state.currentEventTitle;
    let startTime = event.start.toTimeString().substring(0, 8).split(':');
    let startDate = event.start.toLocaleDateString().split('/');
    let endTime   = event.end.toTimeString().substring(0, 8).split(':');
    let endDate   = event.end.toLocaleDateString().split('/');

    let newEvent = {
      'id'   : uuid.v4(),
      'title': title,
      'start': new Date(Number(startDate[2]), Number(startDate[0])-1, Number(startDate[1]),
        Number(startTime[0]), Number(startTime[1])),

      'end':   new Date(Number(endDate[2]), Number(endDate[0])-1, Number(endDate[1]),
        Number(endTime[0]), Number(endTime[1])),
    };
    this.setState({ currentEvent : newEvent, addModalShow : false },
      function () {
        this.props.addEvent(this.state.currentEvent);
      });

    this.closeDrag();
  }

  close     = () => this.setState({ editModalShow   : false });
  openAdd   = () => this.setState({ addModalShow    : true });
  closeAdd  = () => this.setState({ addModalShow    : false });
  closeDrag = () => this.setState({ afterPopupModal : false });

  removeEvent(event){
    this.setState(function () {
      this.props.rmEvent(event);
    });
    this.close();
  }
  editEvent(clickedEvent) {
    this.setState({editModalShow: true});
    this.setState({currentEvent: clickedEvent});
  }

  getEvents(){
    let events = this.props.events;
    let rendredEvents = [];

    for(let i=0;i < events.length; i++){
        let current = {
          'id'   : events[i].id,
          'title': events[i].title,
          'start': new Date(events[i].start),
          'end'  : new Date(events[i].end)
        };
        rendredEvents.push(current);
    }
    return rendredEvents;
  }

  render(){
    let wrapperClass = 'wrappermedium';
    return (
      <div>
        <h3 className="callout">
          Click an event to see more info, or
          drag the mouse over the calendar to select a date/time range.
        </h3>
        <Modal trigger={<Button positive onClick={this.openAdd}>Add Event</Button>}
               open = {this.state.addModalShow}
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
              <Button type="button" negative onClick={this.closeAdd}>Cancel</Button>
              <Button type="button" positive  onClick={() => this.addEventFromButton(
                this.state.bigInputMomentStart,
                this.state.bigInputMomentEnd
              )}
              >Confirm</Button>
            </Form>
          </Modal.Content>
        </Modal>
        <BigCalendar
          selectable
          events={this.getEvents()}
          defaultView='week'
          defaultDate={new Date()}
          onSelectEvent={(event) => this.editEvent(event)}
          onSelectSlot={(event) => this.preAddEvent(event)}
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
            <Button type="button" color='yellow' onClick={this.close}>Close</Button>
            <Button type="button" negative onClick={(evt) => this.removeEvent(this.state.currentEvent)}>Remove Event</Button>
          </Modal.Content>
        </Modal>

        {/* Popup after drag-event  */}
        <Modal open={this.state.afterPopupModal}>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Name of event</label>
                <input
                  className="output"
                  type="text"
                  placeholder="e.g Lecture TMA4135"
                  value={this.state.currentEventTitle}
                  onChange={evt => this.updateEventTitle(evt)}
                />
              </Form.Field>
              <Form.Field>
                <label>Start</label>
                <input className="output"
                       type="text"
                       value={this.state.currentEvent.start}
                       readOnly
                />
              </Form.Field>
              <Form.Field>
                <label>Start</label>
                <input className="output"
                       type="text"
                       value={this.state.currentEvent.start}
                       readOnly
                />
              </Form.Field>
            </Form>
            <br/>
            <Button type="button" color="yellow" onClick={this.closeDrag}>Cancel</Button>
            <Button type="button" positive onClick={(evt) => this.addEvent(this.state.currentEvent)}> Add Event </Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default Calendar;
