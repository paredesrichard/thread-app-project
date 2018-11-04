import React, { Component } from 'react';
import './InternshipsView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';

import { NavLink } from 'react-router-dom';

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
    return (
      <div className="internships-view-container">
        <h3>Welcome to the Internships View</h3>
        <SearchForm />
        <div className="form-group">
          <NavLink to='/admin/internships/add' class="btn btn-primary btn-sm">Add New Record</NavLink>
        </div>
        <section className="internships-section">
          <aside className="internships-aside">
            {this.state.data
              ? this.state.data.map(data => {
                return <Card key={data.id} data={data} adminMode={this.state.adminMode} />;
              })
              : 'Loading data...'}
          </aside>
        </section>
      </div>
    );
  }
}

export default InternshipsView;
