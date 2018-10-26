import React, { Component } from 'react';
import './InternshipsView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';

class InternshipsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
        <section className="internships-section">
          <aside className="internships-aside">
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

export default InternshipsView;
