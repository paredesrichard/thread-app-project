import React, { Component } from 'react';

import TextInput from '../TextInput/TextInput';
import Select from '../Select/Select';
import './SearchForm.css';

class SearchForm extends Component {
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
      </div>
    );
  }
}

export default SearchForm;
