import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { moment } from 'moment';

import { NotificationManager } from 'react-notifications';

export default class EventsForm extends Component {
  constructor(props) {
    super(props);

    const { path } = this.props.match;

    if (this.props.isEditing) {
      this.state = {
        eventsData: this.props.eventsData,
      };
      //console.log('passed data', this.props.eventsData);
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
          event_start_hour: '00:00',
          event_end_hour: '00:00',
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

  handleSubmit = event => {
    event.preventDefault();
    let url = '';
    let method = '';

    if (this.props.isEditing) {
      url = `/api/events/${this.props.match.params.id}`;
      method = 'PUT';
    } else {
      url = `/api/events`;
      method = 'POST';
    }

    fetch(url, {
      method,
      body: JSON.stringify(this.state.eventsData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);
        NotificationManager.success('Record saved');
        this.props.history.push('/events');
      })
      .catch(error => console.error('Error:', error));
  };

  updateField = e => {
    let { name, value } = e.target;
    value = e.target.type === 'checkbox' ? e.target.checked : value;
    this.setState({
      eventsData: {
        ...this.state.eventsData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Events Form</h3>
        <form
          onSubmit={this.handleSubmit}
          className="text-left"
          id="events_form_id"
        >
          <div>
            <hr />
            <h4 className="text-center">{`${
              this.props.isEditing ? 'Edit' : 'Add'
            } Event`}</h4>
            <hr />
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtevent_name">Event Name: </label>
                <input
                  type="text"
                  name="event_name"
                  className="form-control"
                  id="txtevent_name"
                  placeholder="Event name..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_name}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtevent_type">Event Type: </label>
                <input
                  type="text"
                  name="event_type"
                  className="form-control"
                  id="txtevent_type"
                  placeholder="Event type..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_type}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-10">
              <div className="form-group">
                <label htmlFor="txtevent_address">Event Address: </label>
                <input
                  type="text"
                  name="event_address"
                  className="form-control"
                  id="txtevent_address"
                  placeholder="Event Address..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_address}
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label htmlFor="txtevent_address">Event Postal Code: </label>
                <input
                  type="text"
                  name="event_postal_code"
                  className="form-control"
                  id="txtevent_postal_code"
                  placeholder="Postal code..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_postal_code}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtevent_city">Event City: </label>
                <input
                  type="text"
                  name="event_city"
                  className="form-control"
                  id="txtevent_city"
                  placeholder="Event City..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_city}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtevent_geo_lat">Latitude: </label>
                <input
                  type="text"
                  name="event_geo_lat"
                  className="form-control"
                  id="txtevent_geo_lat"
                  placeholder="Latitude..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_geo_lat}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtevent_city">Longitude: </label>
                <input
                  type="text"
                  name="event_geo_lng"
                  className="form-control"
                  id="txtevent_geo_lng"
                  placeholder="Longitude..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_geo_lng}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="idEvent_start_date">Start Date: </label>
                <input
                  type="datetime-local"
                  name="event_start_date"
                  className="form-control"
                  id="idEvent_start_date"
                  onChange={this.updateField}
                  value={this.state.eventsData.event_start_date}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="dateEvent_event_date">End Date: </label>
                <input
                  type="datetime-local"
                  name="event_end_date"
                  className="form-control"
                  id="dateEvent_event_date"
                  onChange={this.updateField}
                  value={this.state.eventsData.event_end_date}
                />
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="idEvent_start_time">Start Time: </label>
                <input
                  type="text"
                  name="event_start_hour"
                  className="form-control"
                  id="idEvent_start_time"
                  onChange={this.updateField}
                  value={this.state.eventsData.event_start_hour}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="idEvent_end_time">End Time: </label>
                <input
                  type="text"
                  name="event_end_hour"
                  className="form-control"
                  id="idEvent_end_time"
                  onChange={this.updateField}
                  value={this.state.eventsData.event_end_hour}
                  required
                />
              </div>
            </div> */}
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="textevent_agenda">Event Agenda:</label>
                <textarea
                  name="event_agenda"
                  className="form-control"
                  id="textevent_agenda"
                  form="events_form_id"
                  rows="3"
                  onChange={this.updateField}
                  value={this.state.eventsData.event_agenda}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtevent_type">Languages: </label>
                <input
                  type="text"
                  name="event_language"
                  className="form-control"
                  id="txtevent_language"
                  placeholder="Languages..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_language}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtevent_type">Max Participants:</label>
                <input
                  type="text"
                  name="max_participants"
                  className="form-control"
                  id="txtmax_participants"
                  placeholder="Max participants..."
                  onChange={this.updateField}
                  value={this.state.eventsData.max_participants}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="txtevent_type">Event URL Link:</label>
                <input
                  type="text"
                  name="event_URL"
                  className="form-control"
                  id="txtevent_URL"
                  placeholder="Event URL link..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_URL}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="txtevent_type">Event Theme Image Link:</label>
                <input
                  type="text"
                  name="event_theme_image"
                  className="form-control"
                  id="txtevent_theme_image"
                  placeholder="Link to event theme image..."
                  onChange={this.updateField}
                  value={this.state.eventsData.event_theme_image}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtcontact_person">Contact Person:</label>
                <input
                  type="text"
                  name="contact_person"
                  className="form-control"
                  id="txtcontact_person"
                  placeholder="Contact Person..."
                  onChange={this.updateField}
                  value={this.state.eventsData.contact_person}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtcontact_phone">Contact Number:</label>
                <input
                  type="text"
                  name="contact_phone"
                  className="form-control"
                  id="txtcontact_phone"
                  placeholder="Contact Number..."
                  onChange={this.updateField}
                  value={this.state.eventsData.contact_phone}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtcontact_email">Email:</label>
                <input
                  type="email"
                  name="contact_email"
                  className="form-control"
                  id="txtcontact_email"
                  placeholder="Email..."
                  onChange={this.updateField}
                  value={this.state.eventsData.contact_email}
                  required
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-end">
            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-2 px-4">
                Save
              </button>
            </div>
            <div className="p-2">
              <NavLink to="/events" className="btn btn-danger mb-2">
                Cancel
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
