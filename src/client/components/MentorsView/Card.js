import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import LoginContext from '../../contexts/login';

/*
const Card = props => {
  
  return (
    <div className="mentors-card">
      <img
        src={props.data.profile_picture}
        className="thumb-nail-img"
        alt="thumbnail"/>
      <p>
        <br/>
        <span className="card-label">First</span>
        :{' '} {props.data.first_name}
        <br/>
        <span className="card-label">Last Name</span>
        :{' '} {props.data.last_name}
        <br/>
        <span className="card-label">Email address</span>
        :{' '} {props.data.email}
        <br/>
        <span className="card-label">Description</span>
        :{' '} {props.data.mentor_description}
      </p>
      
      <div className="form-row">
      <div className="col-auto">
        <Link
          to={`/mentors/edit/${props.data.id}`}
          className="btn btn-primary mb-2"
          target="_blank">Edit</Link>
          </div>
          <Link to="#"  className="btn btn-primary mb-2">
          Delete
        </Link>
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

  deleteRecord = (id) => {
    console.log('deleting record id: ', id);

    fetch(`/api/mentors/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);
        this.props.history.push('/mentors');
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const contextType = LoginContext._currentValue;
    const keyId = Math.random();
    return (
      <div className="mentors-card">
        <img
          src={this.props.data.profile_picture}
          className="mentors-thumb-nail-img"
          alt="thumbnail"
        />
        <p className="p-mentors-view-card">
          <br />
          <span className="card-label">First</span>:{' '}
          {this.props.data.first_name}
          <br />
          <span className="card-label">Last Name</span>:{' '}
          {this.props.data.last_name}
          <br />
          <span className="card-label">Email address</span>:{' '}
          {this.props.data.email}
          <br />
          {!this.state.readMore ? (
            <div>
              <span className="card-label">Gender: </span>
              {this.props.data.gender}
              <br />
              <span className="card-label">Description: </span>
              {this.props.data.mentor_description}
              <br />
              <span className="card-label">Languages: </span>
              {this.props.data.languages}
              <br />
              <span className="card-label">Availability: </span>
              {this.props.data.availability}
              <br />
              <span className="card-label">Offering: </span>
              {this.props.data.offering}
              <br />
              <span className="card-label">Area Location: </span>
              {this.props.data.area_location}
              <br />
              <span className="card-label">Preferred Meeting Place: </span>
              {this.props.data.preferred_meeting_place}
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
            {/* <input type="checkbox" className="read-more-state" id={keyId} onChange={(e)=> console.log(e.target.value)} />
            <label
              htmlFor={keyId}
              class="read-more-trigger"
            /> */}
          </div>

          {contextType.isLoggedIn ? (
            <div className="form-inline justify-content-end">
              <div className="col-auto">
                <Link
                  to={`/admin/mentors/edit/${this.props.data.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you wish to delete this record?',
                      )
                    )
                      this.deleteRecord(this.props.data.id);
                  }}
                >
                  Delete
                </button>
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
