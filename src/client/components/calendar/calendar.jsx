import React from 'react';
import dateFns from 'date-fns';
import './calendar.css';
import { Var } from 'glamorous';
import { isEqual } from 'ip';

import moment from 'moment';

// Pointing to the correct API Url
// const url='https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json';
const url = '/api/events';
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      events: [],
    };

    this.findEvents = this.findEvents.bind(this);
  }

  toDate = dateStr => {
    const [day, month, year] = dateStr.split('/');
    return new Date(year, month - 1, day);
  };

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? 'disabled'
                : dateFns.isSameDay(day, selectedDate)
                  ? 'selected'
                  : ''
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <span className="event-one">{this.findEvents(formattedDate)} </span>
          </div>,
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  componentWillMount() {
    this.renderEvents();
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day,
    });
    console.log("clicked!");
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1),
    });
  };

  findEvents = day => {
    const currentDay = dateFns.setDate(this.state.currentMonth, day);

    return this.state.events
      .filter(event => {
        return event.date.toDateString() === currentDay.toDateString();
      })
      .map(eve => eve.name);
  };

  renderDays() {
    const dateFormat = 'dddd';
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>,
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY';

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            previous
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon"> next </div>
        </div>
      </div>
    );
  }

  renderEvents = () => {
    fetch(url)
      .then(response => response.json())
      .then(events => {
        const newEevents = events.map(event => {
          let eve = {
            name: event.event_name,
            date: this.toDate(
              moment(event.event_start_date).format('DD/M/YYYY'),
            ),
          };
          // console.log("moment", )

          return eve;
        });
        this.setState({ events: newEevents });
      });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}
export default Calendar;
