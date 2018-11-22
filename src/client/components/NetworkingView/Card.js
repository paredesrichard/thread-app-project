import React from 'react';
import './Card.css';
import { Link , NavLink } from 'react-router-dom';

import LoginContext from '../../contexts/login';

/*
const Card = props => {
  return (
    <div className="networking-card">
      <img
        src={props.data.organisation_logo}
        className="thumb-nail-img"
        alt="thumbnail"
      />
      <p>
        <span className="card-label">Sector</span> :{' '}
        {props.data.sector_activity}
        <br />
        <span className="card-label">Organisation Name</span> :{' '}
        {props.data.organisation_name}
        <br />
        <span className="card-label">Address</span> :{' '}
        {props.data.organisation_address}
        <br />
        <span className="card-label">Description</span> :{' '}
        {props.data.organisation_description}
      </p>

      <div className="form-row">
      <div className="col-auto">
        <Link
          to={`/networking/edit/${props.data.id}`}
          className="btn btn-primary mb-2"
          target="_blank">Edit</Link>
          </div>
          <div className="col-auto">
          <button  className="btn btn-primary mb-2" >
          Delete
        </button>
        </div>
      </div>
      
    </div>
  );
};
*/

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: true,
    };
  }

  // deleteRecord(id) {
  //   console.log('deleting record id: ', id);

  //   fetch(`/api/networking/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.text())
  //     .then(response => {
  //       console.log('Success:', response);
  //       this.props.history.push('/networking');
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  render() {
    const contextType = LoginContext._currentValue;
    const { id } = this.props.data;
    return (
      <div className="networking-card">
        <img
          src={this.props.data.organisation_logo}
          className="networking-thumb-nail-img"
          alt="thumbnail"
        />
        <p className="p-networking-view-card">
          <br />
          <span className="card-label">Organisation Name : </span>
          {this.props.data.organisation_name}
          <br />
          <span className="card-label">Sector : </span>
          {this.props.data.sector_activity}
          <br />
          <span className="card-label">Address : </span>
          {this.props.data.organisation_address}
          <br />
          {!this.state.readMore ? (
            <React.Fragment>
              <span className="card-label card-description">
                Description :{' '}
              </span>
              {this.props.data.organisation_description}
              <br />
              <span className="card-label">Organisation City : </span>
              {this.props.data.organisation_city}
              <br />
              <span className="card-label">Contact Person : </span>
              {this.props.data.contact_person}
              <br />
              <span className="card-label">Contact Email : </span>
              <a
                className="text-muted"
                href={`mailto:${this.props.data.contact_email}`}
              >
                {this.props.data.contact_email}
              </a>
              <br />
              <span className="card-label">Contact Phone : </span>
              {this.props.data.contact_phone}
              <br />
            </React.Fragment>
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
            <div className="form-inline justify-content-end">
              <div className="col-auto">
                <Link
                  to={`/networking/edit/${this.props.data.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </div>
              <div className="col-auto">
                <NavLink
                  className="btn btn-danger btn-sm"
                  to={`/admin/networking/delete/${id}`}
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
    );
  }
}

export default Card;
