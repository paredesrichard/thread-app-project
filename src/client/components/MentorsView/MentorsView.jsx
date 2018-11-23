import React, { Component } from 'react';
import './MentorsView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';
import { Link } from 'react-router-dom';
import LoginContext from '../../contexts/login';
import { NavLink } from 'react-router-dom';
import ResultMessage from '../Message/ResultMessage';

class MentorsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      mentorSearchWord: '',
      fieldName: 'name',
      orderBy: 'firstname,lastname',
      sortBy: 'ASC',
      isInitial: true,
      dataisLoaded: false,
      recordCount: 0,
      
    };
  }

  componentDidMount() {
    fetchAPIData('/api/mentors').then(newData => {
      console.log('MentorView component---->', newData);
      this.setState({ data: newData, dataisLoaded: true });
      if (newData.length === 0) {
        //  Set the recordCount to -2 to indicate that the table doesn't have
        //  any records to provide to the customer
        //
        this.setState({ recordCount: -2 });
        //console.log('Table is empty');
      } else this.setState({ recordCount: newData.length });
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
    const url = `/api/mentors/search?${this.state.fieldName}=${
      this.state.mentorSearchWord
    }&orderby=${this.state.fieldName}&sort=${this.state.sortBy}`;

    fetchAPIData(url).then(newData => {
      this.setState({ data: newData });
      this.setState({ data: newData, recordCount: newData.length });
    });
  };

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="mentors-view-container">
        <h3>Search for Mentors</h3>

        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row text-left">
                <div className="col-md-4">
                  <div className="form-group text-left">
                    <label htmlFor="txtMentorSearchWord">Search:</label>
                    <input
                      type="text"
                      name="mentorSearchWord"
                      className="form-control"
                      id="txtMentorSearchWord"
                      placeholder="Keyword..."
                      onChange={this.updateField}
                      value={this.state.searchWord}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group text-left">
                    <label>Search by:</label>
                    <select
                      name="fieldName"
                      className="custom-select"
                      onChange={this.updateField}
                    >
                      <option defaultValue value="name">
                        Mentor's Name
                      </option>
                      <option value="offering">Offering</option>
                      <option value="area_location">Area Location</option>
                      <option value="preferred_meeting_place">
                        Preferred Meeting Place
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-md-2">
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

                <div className="col-md-2">
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
                <div className="form-row">
                  <div className="col-md-12 text-md-center">
                    <NavLink
                      to="/admin/mentors/add"
                      className="btn btn-primary btn-sm"
                    >
                      Add Record
                    </NavLink>
                  </div>
                </div>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>

        <div className="container">
          {this.state.dataisLoaded ? (
            <ResultMessage count={this.state.recordCount} table="Mentors" />
          ) : (
            <ResultMessage count={-1} table="Mentors" />
          )}
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.dataisLoaded
              ? this.state.data.map(data => {
                  return <Card key={data.id} data={data} {...this.props} />;
                })
              : 'Loading data...'}
          </div>
        </div>
      </div>
    );
  }
}

export default MentorsView;
