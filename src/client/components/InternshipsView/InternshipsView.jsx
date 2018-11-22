import React, { Component } from 'react';
import './InternshipsView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';
//import InternshipsSearchForm from '../InternshipsForm/InternshipsSearchForm';

import { NavLink } from 'react-router-dom';

import LoginContext from '../../contexts/login';

class InternshipsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      adminMode: true,
      internSearchWord: '',
      fieldName: 'internship_title',
      orderBy: 'internship_title',
      sortBy: 'ASC',
      isInitial: true,
    };
  }

  componentDidMount() {
    // just load all the data initially...
    let newCoords = [];
    fetchAPIData('/api/internships').then(newData => {
      this.setState({ data: newData, isInitial: false });
    });
  }

  // This method updates the state
  updateField = e => {
    let { name, value } = e.target;
    value = e.target.type === 'checkbox' ? e.target.checked : value;
    this.setState({
      [name]: value,
    });
  };

  // This handleSubmit searches for the data needed by the user
  handleSubmit = event => {
    event.preventDefault();
    const url = `/api/internships/search?${this.state.fieldName}=${
      this.state.internSearchWord
    }&orderby=${this.state.fieldName}&sort=${this.state.sortBy}`;

    fetchAPIData(url).then(newData => {
      this.setState({ data: newData });
    });
  };

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="internships-view-container">
        <h3>Search for Internships</h3>

        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row text-left">
                <div className="col-md-4">
                  <div className="form-group text-left">
                    <label>Search:</label>
                    <input
                      type="text"
                      name="internSearchWord"
                      className="form-control"
                      id="txtinternSearchWord"
                      placeholder="Search keyword..."
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
                      <option defaultValue value="internship_title">
                        Internship Title
                      </option>
                      <option value="organisation_name">
                        Organisation Name
                      </option>
                      <option value="location">Location</option>
                      <option value="contact_person">Contact person</option>
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
                <div className="form-row mb-3">
                  <div className="col-md-12">
                    <NavLink
                      to="/admin/internships/add"
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

        <section className="internships-section">
          <aside className="internships-aside">
            {this.state.data && this.state.data.length !== 0
              ? this.state.data.map(data => {
                  return (
                    <Card
                      key={data.id}
                      data={data}
                      adminMode={this.state.adminMode}
                    />
                  );
                })
              : 'Result is empty.  Please search again using a different keyword'}
          </aside>
        </section>
      </div>
    );
  }
}

export default InternshipsView;
