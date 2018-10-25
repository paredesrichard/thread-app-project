import React, { Component } from 'react';
import './EventsView.css';

import { fetchAPIData } from '../Api/api';

// import SearchForm from '../SearchForm/SearchForm';
import EventViewSearchForm from '../EventViewSearchForm/EventViewSearchForm';
import Card from './Card';
import MapComponent from '../MapComponent/MapComponent';
import Calendar from '../calendar/calendar';
//import { renderComponent } from 'recompose';

class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: 'calendar',
    };
  }

  componentDidMount() {
    let newCoords = [];
    fetchAPIData('http://localhost:3000/api/events').then(newData => {
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

  render() {
    return (
      <div className="events-view-container">
        <h3>Events View</h3>
        <EventViewSearchForm />
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
            {this.state.view === 'map' ? (
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
