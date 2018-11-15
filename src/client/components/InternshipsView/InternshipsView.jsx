import React, { Component } from 'react';
import './InternshipsView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';
import InternshipsSearchForm from '../InternshipsForm/InternshipsSearchForm';

import { NavLink } from 'react-router-dom';

import LoginContext from '../../contexts/login';

class InternshipsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      adminMode: true,
    };
  }

  componentDidMount() {
    let newCoords = [];
    fetchAPIData('/api/internships').then(newData => {
      this.setState({ data: newData });
    });
  }

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="internships-view-container">
        <h3>Welcome to the Internships View</h3>
        {/* <SearchForm /> */}
        <InternshipsSearchForm />
        {contextType.isLoggedIn ? (
          <div className="form-group">
            <div className="form-row justify-content-end">
              <div className="col-md-3 justify-content-end">
                <NavLink
                  to="/admin/internships/add"
                  className="btn btn-primary btn-sm align-self-end"
                >
                  Add Record
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        <section className="internships-section">
          <aside className="internships-aside">
            {this.state.data
              ? this.state.data.map(data => {
                  return (
                    <Card
                      key={data.id}
                      data={data}
                      adminMode={this.state.adminMode}
                    />
                  );
                })
              : 'Loading data...'}
          </aside>
        </section>
      </div>
    );
  }
}

export default InternshipsView;
