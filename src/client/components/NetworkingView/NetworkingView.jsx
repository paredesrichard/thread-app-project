import React, { Component } from 'react';
import './NetworkingView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
//import SearchForm from '../SearchForm/SearchForm';
import { Link, NavLink } from 'react-router-dom';

import LoginContext from '../../contexts/login';

import ResultMessage from '../Message/ResultMessage';

class NetworkingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchKeyword: '',
      fieldName: 'organisation_name',
      orderBy: '',
      sortBy: 'ASC',
      isInitial: true,
      dataisLoaded: false,
      recordCount: 0,
      //message: '',
    };
  }

  componentDidMount() {
    //  Load all active records initially
    fetchAPIData('/api/networking').then(newData => {
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
    const url = `/api/networking/search?${this.state.fieldName}=${
      this.state.searchKeyword
    }&orderby=${this.state.fieldName}&sort=${this.state.sortBy}`;

    fetchAPIData(url).then(newData => {
      this.setState({ data: newData, recordCount: newData.length });
    });
  };

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="networking-view-container">
        <h3>Search for Networks</h3>
        {/* <SearchForm /> */}

        <div className="container-fluid">
          <div className="d-flex justify-content-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row text-left">
                <div className="col-md-4">
                  <div className="form-group text-left">
                    <label htmlFor="txtsearchKeyword">Search:</label>
                    <input
                      type="text"
                      name="searchKeyword"
                      className="form-control"
                      id="txtsearchKeyword"
                      placeholder="Keyword..."
                      onChange={this.updateField}
                      value={this.state.searchKeyword}
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
                      <option defaultValue value="organisation_name">
                        Organisation's Name
                      </option>
                      <option value="contact_person">Contact Person</option>
                      <option value="sector_activity">Sector Activity</option>
                      <option value="organisation_description">
                        Organisation Description
                      </option>
                      <option value="organisation_city">
                        Organisation City
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
            </form>
          </div>
        </div>

        {contextType.isLoggedIn ? (
          <div className="form-group">
            <Link to="/networking/add" className="btn btn-primary btn-sm">
              Add Record
            </Link>
          </div>
        ) : (
          ''
        )}
        <section className="networking-section">
          {this.state.dataisLoaded ? (
            <ResultMessage count={this.state.recordCount} table="Networking" />
          ) : (
            <ResultMessage count={-1} table="Networking" />
          )}
          <aside className="networking-aside">
            {this.state.data
              ? this.state.data.map(data => {
                  return <Card key={data.id} data={data} />;
                })
              : 'Loading data...'}
          </aside>
        </section>
      </div>
    );
  }
}

export default NetworkingView;
