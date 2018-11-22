import React, { Component, Fragment } from 'react';
import { fetchAPIData } from '../Api/api';
import { NavLink } from 'react-router-dom';
import { Object } from 'es6-shim';
import ConfirmDeletion from './ConfirmDeletion';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      isLoading: true,
      originURL: '',
      recordDeleted: false,
    };
  }

  componentDidMount() {
    const { url, params } = this.props.match;
    console.log('passed props', this.props);
    console.log(url.split('/')[2]);
    const fetchAPIURL = `/api/${url.split('/')[2]}/${params.id}`;
    fetchAPIData(fetchAPIURL).then(newData => {
      this.setState({
        data: newData,
        isLoading: false,
        originURL: url.split('/')[2],
      });
      console.log('new data', this.state.data);
    });
  }

  deleteRecordItem = () => {
    const { data, originURL } = this.state;
    const deleteAPIURL = `/api/${originURL}/${data.id}`;
    console.log('deleting record id: ', data.id, deleteAPIURL);
    fetch(deleteAPIURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);
        this.setState({ recordDeleted: true });
      })
      .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          'Loading Data. Please wait...'
        ) : this.state.recordDeleted ? (
          <ConfirmDeletion {...this.props} origin={this.state.originURL} />
        ) : (
          <div>
            <h4 className="font-weight-bold text-secondary">
              Do you want to delete the record below?
            </h4>
            <div className="form-inline justify-content-center">
              <NavLink
                to={`/${this.state.originURL}`}
                className="btn btn-lg btn-primary mr-2 px-5"
              >
                No
              </NavLink>
              <button
                type="submit"
                onClick={this.deleteRecordItem}
                className="btn btn-danger btn-lg mr-2 px-5"
              >
                Yes
              </button>
            </div>
            <div className="container-fluid ">
              <div className="border border-light shadow-lg p-3 mb-5 bg-white rounded">
                <p className="text-left">
                  {Object.keys(this.state.data).map(key => {
                    return (
                      <Fragment key={Math.random()}>
                        <span className="font-weight-bold text-uppercase text-info">
                          {key.replace('_', ' ')}
                        </span>{' '}
                        :{' '}
                        <span className="text-muted">
                          {this.state.data[key]}
                        </span>
                        <br />
                      </Fragment>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DeleteRecord;
