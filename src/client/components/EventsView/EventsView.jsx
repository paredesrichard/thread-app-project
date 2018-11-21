import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './EventsView.css';

import { fetchAPIData } from '../Api/api';

// import SearchForm from '../SearchForm/SearchForm';
// import EventViewSearchForm from '../EventViewSearchForm/EventViewSearchForm';
import Card from './Card';
import MapComponent from '../MapComponent/MapComponent';
import Calendar from '../calendar/calendar';
//import { renderComponent } from 'recompose';

import LoginContext from '../../contexts/login';

import moment from 'moment';

class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mapView: true,
      eventsSearchWord: '',
      fieldName: 'event_name',
      dateEventStartDate: '',
      dateEventEndDate: '',
      orderBy: 'event_name',
      sortBy: 'ASC',
      isInitial: true,
    };
  }

  componentDidMount() {
    let newCoords = [];
    fetchAPIData('/api/events').then(newData => {
      this.setState({ data: newData });
      newCoords = newData.map(data => {
        let tempCoords = {};
        tempCoords = {
          lat: data.event_geo_lat,
          lng: data.event_geo_lng,
        };
        return tempCoords;
      });
      this.setState({ coords: newCoords });
    });
  }

  updateField = e => {
    let { name, value } = e.target;
    value = e.target.type === 'checkbox' ? e.target.checked : value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    console.log('form submitted');
    event.preventDefault();
    const url = `/api/events/search?${this.state.fieldName}=
    ${this.state.eventsSearchWord.trim()}
    &event_start_date=${moment(this.state.dateEventStartDate)
      .format('YYYY-MM-DD')
      .trim()}
    &event_end_date=${moment(this.state.dateEventEndDate)
      .format('YYYY-MM-DD')
      .trim()}
    &orderby=${this.state.fieldName}&sort=${this.state.sortBy}`;
    console.log('moment: ', url);
    fetchAPIData(url).then(newData => {
      this.setState({ data: newData });
      let newCoords = [];
      newCoords = newData.map(data => {
        let tempCoords = {};
        tempCoords = {
          lat: data.event_geo_lat,
          lng: data.event_geo_lng,
        };
        return tempCoords;
      });
      this.setState({ coords: newCoords });
    });
  };

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="events-view-container">
        <h3>Welcome to the Events Page</h3>
        {/* <EventViewSearchForm /> */}

        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row text-left">
                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>Search:</label>
                    <input
                      type="text"
                      name="eventsSearchWord"
                      className="form-control"
                      id="txtSearchWord"
                      placeholder="Search keyword..."
                      onChange={this.updateField}
                      value={this.state.eventsSearchWord}
                    />
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>Search by:</label>
                    <select
                      name="fieldName"
                      className="custom-select"
                      onChange={this.updateField}
                    >
                      <option defaultValue value="event_name">
                        Event name
                      </option>
                      <option value="event_type">Event type</option>
                      <option value="event_city">City</option>
                      <option value="contact_person">Contact person</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>Start date:</label>
                    <input
                      type="date"
                      name="dateEventStartDate"
                      className="form-control"
                      id="eventStartDate"
                      required
                      onChange={this.updateField}
                      value={this.state.dateEventStartDate}
                    />
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>End date:</label>
                    <input
                      type="date"
                      name="dateEventEndDate"
                      className="form-control"
                      id="eventEndDate"
                      required
                      onChange={this.updateField}
                      value={this.state.dateEventEndDate}
                    />
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>Sort order:</label>
                    <select
                      name="sortBy"
                      className="custom-select"
                      onChange={this.updateField}
                    >
                      <option defaultValue value="ASC">
                        Ascending
                      </option>
                      <option value="DESC">Descending</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group">
                    <label className="invisible">Search</label>
                    <button
                      type="submit"
                      className="btn btn-primary form-control"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {contextType.isLoggedIn ? (
                <div className="form-row mb-3">
                  <div className="col-md-12">
                    <NavLink
                      to="/admin/events/add"
                      className="btn btn-primary btn-sm"
                    >
                      Add Record
                    </NavLink>
                  </div>
                  <br />
                </div>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>

        <section className="events-section">
          <aside className="events-aside">
            <h4>Events results:</h4>
            {this.state.data
              ? this.state.data.map(data => {
                  return <Card key={data.id} data={data} />;
                })
              : 'No results'}
          </aside>
          <div className="map-section">
            <div className="form-row text-right">
              <button
                className="btn btn-secondary btn-sm btn-block"
                onClick={() => {
                  this.setState({ mapView: !this.state.mapView });
                }}
              >
                {this.state.mapView
                  ? 'Switch to Calendar View'
                  : 'Switch to Map View'}
              </button>
            </div>
            {this.state.mapView === true ? (
              <MapComponent setMarker Zoom={11} coords={this.state.coords} />
            ) : (
              <Calendar />
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default EventsView;
