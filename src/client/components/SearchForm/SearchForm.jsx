import React, { Component } from 'react';

import TextInput from '../TextInput/TextInput';
import Select from '../Select/Select';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : {
        categories : ""
      }
    }
  }
  updateField = (e) =>{
    const {name, value} = e.target;
    console.log(name, value);
    this.setState({
      data : {
        categories : value
      }
    })
  }
  render() {
    return (
      <form action={`/${this.state.data.categories}/search`}>
            <div id="search-form" className="search-container">
            <div>
            <label>search keyword:</label>
            <TextInput placeholder={'search key word'} name={'search_word'} />
          </div>
{/*
              <div>
                <label>Job Title:</label>
                <TextInput placeholder={'Job title'} name={'jobtitle'} />
              </div>
    */}
              <div>
                <label>Location:</label>
                <TextInput placeholder={'Location'} name={'location'} />
              </div>
              
              <div>
                <label>Select</label>
                    <select id="categories" value={this.state.data.categories} name="categories" onChange={this.updateField} required>
                    <option value="">None</option>
                    <option value="Internships">Internships</option>
                    <option value="Events">Events</option>
                    <option value="Mentors">Mentors</option>
                    <option value="Networking">Networking</option>
                  </select>
                </div>

              <div>
              <button>Search</button>
              </div>
            </div>
      </form>
    );
  }
}

export default SearchForm;
