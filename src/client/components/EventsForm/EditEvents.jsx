import React, { Component } from 'react';
import EventsForm from './EventsForm';
import moment from 'moment';

class EditEvents extends Component {
  state = {
    isLoading: true,
    message: 'Loading data...',
    eventsData: '',
  };

  componentDidMount() {
    const url = '/api/events';
    const id = this.props.match.params.id;

    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data => {
        const temp_start_date = new Date(data.event_start_date).toUTCString();
        console.log('converted date', temp_start_date);
        data.event_start_date = temp_start_date;
        const temp_end_date = new Date(data.event_start_date).toUTCString();
        data.event_end_date = temp_end_date;

        this.setState({
          isLoading: false,
          eventsData: data,
        });
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>{this.state.message}</div>
    ) : (
      <EventsForm
        {...this.props}
        eventsData={this.state.eventsData}
        id={this.props.match.params.id}
        isEditing={true}
      />
    );
  }
}

export default EditEvents;
