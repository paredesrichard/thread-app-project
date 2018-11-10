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
  }
  deleteRecord(id) {
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
        alert('Record has been deleted');
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    const contextType = LoginContext._currentValue;
    return (
      <div className="mentors-card">
        <img
          src={this.props.data.profile_picture}
          className="thumb-nail-img"
          alt="thumbnail"
        />
        <p>
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
          <span className="card-label">Description</span>:{' '}
          {this.props.data.mentor_description}
        </p>
        {contextType.isLoggedIn ? (
          <div className="form-row">
            <div className="col-auto">
              <Link
                to={`/mentors/edit/${this.props.data.id}`}
                className="btn btn-primary mb-2"
                target="_blank"
              >
                Edit
              </Link>
            </div>
            <div className="col-auto">
              <button
                class="btn btn-primary btn-sm"
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
    );
  }
}

export default Card;
