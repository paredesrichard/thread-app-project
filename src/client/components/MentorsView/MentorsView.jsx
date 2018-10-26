import React, { Component } from 'react';
import './MentorsView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';

class MentorsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let newCoords = [];
    fetchAPIData('/api/mentors').then(newData => {
      console.log(newData);
      this.setState({ data: newData });
    });
  }

  render() {
    return (
      <div className="mentors-view-container">
        <h3>Welcome to the mentors View</h3>
        <SearchForm />
        <section className="mentors-section">
          <aside className="mentors-aside">
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

export default MentorsView;
