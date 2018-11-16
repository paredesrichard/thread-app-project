import React, { Component } from 'react';

export default class EventsForm extends Component {
  constructor(props) {
    super(props);

    const { path } = this.props.match;

    if (this.props.isEditing) {
      this.state = {
        eventsData: this.props.eventsData,
      };
    } else if (path === '/admin/events/add') {
      this.state = {
        isEditing: true,
        eventsData: {
          event_name: undefined,
          event_type: '',
          event_address: '',
          event_postal_code: '',
          event_city: '',
          event_geo_lat: '',
          event_geo_lng: '',
          event_start_date: '',
          event_end_date: '',
          event_start_hour: '',
          event_end_hour: '',
          event_language: '',
          max_participants: '',
          event_URL: '',
          event_theme_image: '',
          contact_person: '',
          contact_phone: '',
          contact_email: '',
          active: true,
        },
      };
    }
  }
  render() {
    return (
      <div>
        <h4>Welcome to Events Admin Form</h4>
      </div>
    );
  }
}
