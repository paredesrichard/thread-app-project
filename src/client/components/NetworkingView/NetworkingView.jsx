import React, { Component } from 'react';
import './NetworkingView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';

class NetworkingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let newCoords = [];
    fetchAPIData('/api/networking').then(newData => {
      this.setState({ data: newData });
    });
  }

  render() {
    return (
      <div className="networking-view-container">
        <h3>Welcome to the Networking View</h3>
        <SearchForm />
        <section className="networking-section">
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
