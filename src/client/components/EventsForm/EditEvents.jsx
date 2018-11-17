import React, { Component } from 'react';
import EventsForm from './EventsForm';

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
        this.setState({
          isLoading: false,
          eventsData: data,
        });
        console.log(data);
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
