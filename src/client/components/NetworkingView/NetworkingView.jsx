import React, { Component } from 'react';
import './NetworkingView.css';

import { fetchAPIData } from '../Api/api';
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';
import { Link } from 'react-router-dom';

import LoginContext from '../../contexts/login';

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
    const contextType = LoginContext._currentValue;
    return (
      <div className="networking-view-container">
        <h3>Welcome to the Networking View</h3>
        <SearchForm />
        {contextType.isLoggedIn ? (
          <div className="form-group">
            <Link to="/networking/add" className="btn btn-primary btn-sm">
              Add New Record
            </Link>
          </div>
        ) : (
          ''
        )}
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
