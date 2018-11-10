import React, { Component } from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

import LoginContext from '../../contexts/login';

// function deleteRecord(id) {
//   console.log("deleting record id: ", id);

//   fetch(`/api/internships/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.text())
//     .then(response => {
//       console.log('Success:', response)
//       this.props.history.push("/internships");
//     })
//     .catch(error => console.error('Error:', error));
// }

class Card extends Component {
  constructor(props) {
    super(props);
  }

  deleteRecord(id) {
    console.log('deleting record id: ', id);
    fetch(`/api/internships/${id}`, {
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
    // console.log("data:", this.props.data);
    return (
      <div className="internships-card">
        <img
          src={this.props.data.internship_theme_image}
          className="internships-thumb-nail-img"
          alt="thumbnail"
        />
        <div className="card-body p-1">
          <p>
            <span className="card-label">Title</span> :{' '}
            {this.props.data.internship_title}
            <br />
            <span className="card-label">Organisation Name</span> :{' '}
            {this.props.data.organisation_name}
            <br />
            <span className="card-label">Category</span> :{' '}
            {this.props.data.internship_category}
            <br />
            <span className="card-label">Description</span> :{' '}
            {this.props.data.internship_description}
          </p>
        </div>
        {contextType.isLoggedIn ? (
          <div className="form-row">
            <div className="col-auto">
              <NavLink
                to={`/admin/internships/edit/${this.props.data.id}`}
                className="btn btn-primary btn-sm"
              >
                Edit
              </NavLink>
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
