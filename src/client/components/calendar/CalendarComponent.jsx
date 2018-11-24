import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { renderComponent } from 'recompose';
import 'react-big-calendar/lib/css/react-big-calendar.css';
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const localizer = BigCalendar.momentLocalizer(moment);

class CalendarComponent extends Component {

  componentDidMount() {
    this.setState({ events: this.props.data });
  }

  render() {
    return (
      <div className="container">
        {this.props.data ? (
          <div>
            <BigCalendar
              localizer={localizer}
              views={allViews}
              defaultDate={new Date()}
              defaultView="month"
              events={this.props.data}
              style={{ height: '100vh' }}
              step={60}
              showMultiDayTimes
            />
          </div>
        ) : (
          'Loading data....'
        )}
      </div>
    );
  }
}

export default CalendarComponent;
