import React, { Component } from 'react';
import './Card.css';
import moment from 'moment';

import LoginContext from '../../contexts/login';
import { NavLink, Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: true,
    };
  }

  // deleteRecord(id) {
  //   console.log('deleting record id: ', id);
  //   fetch(`/api/events/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.text())
  //     .then(response => {
  //       console.log('Success:', response);
  //       this.props.history.push('/');
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  render() {
    const contextType = LoginContext._currentValue;
    const {
      id,
      event_name,
      event_type,
      event_start_date,
      event_address,
      event_postal_code,
      event_city,
      event_theme_image,
      contact_person,
      contact_phone,
      contact_email,
    } = this.props.data;
    return (
      <div className="container text-left p-3">
        <div className="card p-2 h-auto  shadow-lg rounded">
          <img
            className="card-img-top"
            src={event_theme_image}
            alt="Card image cap"
          />
          <div className="card-body h-auto">
            <p>
              <span className="card-label">Name</span> : {event_name}
              <br />
              <span className="card-label">Type</span> : {event_type}
              <br />
              <span className="card-label">Start date:</span> :{' '}
              {moment(event_start_date).format('DD/MM/YYYY')}
              {!this.state.readMore ? (
                <div>
                  <span className="card-label">Event Address : </span>
                  {event_address}
                  <br />
                  <span className="card-label">Postal Code : </span>
                  {event_postal_code}
                  <br />
                  <span className="card-label">Start Date : </span>
                  {moment(this.props.data.event_start_date).format(
                    'DD/MM/YYYY',
                  )}
                  <br />
                  <span className="card-label">End Date :</span>
                  {moment(this.props.data.event_end_date).format('DD/MM/YYYY')}
                  <br />

                  <span className="card-label">Contact Person : </span>
                  {contact_person}
                  <br />
                  <span className="card-label">Contact number : </span>
                  {contact_phone}
                  <br />
                  <span className="card-label">Contact Email : </span>
                  {contact_email}
                  <br />
                </div>
              ) : (
                ''
              )}
            </p>

            <div className="d-flex justify-content-between">
              <div className="col-auto">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({ readMore: !this.state.readMore });
                  }}
                >
                  {this.state.readMore ? 'View details' : 'Hide details'}
                </button>
              </div>
              {contextType.isLoggedIn ? (
                <div className="form-row">
                  <div className="col-auto">
                    <NavLink
                      to={`/admin/events/edit/${this.props.data.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </NavLink>
                  </div>
                  <div className="col-auto">
                    <NavLink
                      className="btn btn-danger btn-sm "
                      to={`/admin/events/delete/${id}`}
                    >
                      Delete
                    </NavLink>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
