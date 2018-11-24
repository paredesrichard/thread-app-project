import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './EventsView.css';

import { fetchAPIData } from '../Api/api';

// import SearchForm from '../SearchForm/SearchForm';
// import EventViewSearchForm from '../EventViewSearchForm/EventViewSearchForm';
import Card from './Card';
import MapContainer from '../MapComponent/AlternateMap';
import Calendar from '../calendar/calendar';
//import { renderComponent } from 'recompose';

import LoginContext from '../../contexts/login';

import moment from 'moment';

import ResultMessage from '../Message/ResultMessage';

class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mapView: true,
      eventsSearchWord: '',
      orderBy: 'event_name',
      dateEventStartDate: '',
      dateEventEndDate: '',
      dataisLoaded: false,
      sortOrder: 'ASC',
      recordCount: 0,
      coords: [],
      key: null,
    };
  }

  componentDidMount() {
    //  Load all active records initially
    let newCoords = [];
    fetchAPIData('/api/events').then(newData => {
      this.setState({ data: newData, dataisLoaded: true });
      if (newData.length === 0) {
        //  Set the recordCount to -2 to indicate that the table doesn't have
        //  any records to provide to the customer
        //
        this.setState({ recordCount: -2 });
        //console.log('Table is empty');
      } else this.setState({ recordCount: newData.length });
      // newCoods will be passed to the map for markings
      newCoords = newData.map(data => {
        let tempCoords = {};
        tempCoords = {
          lat: data.event_geo_lat,
          lng: data.event_geo_lng,
        };
        return tempCoords;
      });
      this.setState({ coords: newCoords, mapView: !this.state.mapView });
      this.setState({ mapView: !this.state.mapView });
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
    event.preventDefault();
    const url =
      `/api/events/search?searchKeyword=${this.state.eventsSearchWord.trim()}` +
      `&event_start_date=${moment(this.state.dateEventStartDate)
        .format('YYYY-MM-DD')
        .trim()}` +
      `&event_end_date=${moment(this.state.dateEventEndDate)
        .format('YYYY-MM-DD')
        .trim()}` +
      `&orderby=${this.state.orderBy}&sort=${this.state.sortOrder}`;
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
      this.setState({
        coords: newCoords,
        recordCount: newData.length,
        key: Math.random(),
      });
    });
  };

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="events-view-container">
        <h3>Search for Events</h3>
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
                    <label>Start date:</label>
                    <input
                      type="date"
                      name="dateEventStartDate"
                      className="form-control"
                      id="eventStartDate"
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
                      onChange={this.updateField}
                      value={this.state.dateEventEndDate}
                    />
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>Sort by:</label>
                    <select
                      name="orderBy"
                      className="custom-select"
                      onChange={this.updateField}
                    >
                      <option value="event_name">Event Name</option>
                      <option value="event_type">Event Type</option>
                      <option value="event_city">City</option>
                      <option value="contact_person">Contact Person</option>
                      <option value="event_start_date">Start Date</option>
                      <option value="event_end_date">End Date</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-auto">
                  <div className="form-group text-left">
                    <label>Sort order:</label>
                    <select
                      name="sortOrder"
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
          {this.state.dataisLoaded ? (
            <ResultMessage count={this.state.recordCount} table="Networking" />
          ) : (
            <ResultMessage count={-1} table="Networking" />
          )}
          <aside className="events-aside">
            {this.state.data
              ? this.state.data.map(data => {
                  return <Card key={data.id} data={data} id={data.id} />;
                })
              : 'No results'}
          </aside>
          <div className="map-section sticky-top pt-4">
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
              <MapContainer
                key={this.state.key}
                Zoom={11}
                coords={this.state.coords}
                data={this.state.data}
                className="p-3"
              />
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
