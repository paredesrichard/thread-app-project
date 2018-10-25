import React, { Component } from 'react';

import TextInput from '../TextInput/TextInput';
import Select from '../Select/Select';
import './EventViewSearchForm.css';

class EventViewSearchForm extends Component {
  render() {
    return (
      <div id="search-form" className="search-container">
        <div>
          <label>Job Title:</label>
          <TextInput placeholder={'Job title'} name={'jobtitle'} />
        </div>
        <div>
          <label>Location:</label>
          <TextInput placeholder={'Location'} name={'location'} />
        </div>
        <div>
          <label>Select</label>
          <Select />
        </div>
        <div>
          <input
            className="map-view-button"
            type="button"
            value="Map View"
            onClick={e => console.log('map view button clicked')}
          />
          <input
            className="map-view-button"
            type="button"
            value="Calendar View"
            onClick={e => console.log('calendar view button clicked')}
          />
        </div>
      </div>
    );
  }
}

export default EventViewSearchForm;
