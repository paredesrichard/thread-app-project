import React, { Component } from 'react';
import './Card.css';
import { NavLink, Link } from 'react-router-dom';

import LoginContext from '../../contexts/login';
import DeleteRecord from '../DeleteRecord/DeleteRecord';
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
    this.state = {
      readMore: true,
    };
  }

  // deleteRecord(id) {
  //   console.log('deleting record id: ', id);
  //   fetch(`/api/internships/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.text())
  //     .then(response => {
  //       console.log('Success:', response);
  //       this.props.history.push('/internships');
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  render() {
    const contextType = LoginContext._currentValue;
    // console.log("data:", this.props.data);
    const { id } = this.props.data;
    return (
      <div className="internships-card  shadow-lg rounded">
        <img
          src={this.props.data.internship_theme_image}
          className="internships-thumb-nail-img"
          alt="thumbnail"
        />
        <div>
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
            {!this.state.readMore ? (
              <div>
                <span className="card-label">Department : </span>
                {this.props.data.department}
                <br />
                <span className="card-label">Internship Description : </span>
                {this.props.data.internship_description}
                <br />
                <span className="card-label">Organisation Description : </span>
                {this.props.data.organisation_description}
                <br />
                <span className="card-label">Agreement? : </span>
                {this.props.data.internship_agreement ? 'Yes' : 'No'}
                <br />
                <span className="card-label">Requirements : </span>
                {this.props.data.internship_requirements ? 'Yes' : 'No'}
                <br />
                <span className="card-label">Application Requirements : </span>
                {this.props.data.application_requirements}
                <br />
                <span className="card-label">Availability Schedule : </span>
                {this.props.data.internship_availabiltiy_schedule}
                <br />
                <span className="card-label">Travel Expenses : </span>
                {this.props.data.travel_expenses ? 'Yes' : 'No'}
                <br />
                <span className="card-label">Location : </span>
                {this.props.data.location}
                <br />
                <span className="card-label">Contact Person : </span>
                {this.props.data.contact_person}
                <br />
                <span className="card-label">Contact Number : </span>
                {this.props.data.phone_contact}
                <br />
                <span className="card-label">Email : </span>
                {this.props.data.email_contact}
                <br />
                <span className="card-label">Organisation Address : </span>
                {this.props.data.organisation_address}
                <br />
                <span className="card-label">
                  Website :{' '}
                  <a
                    className="text-secondary"
                    href={this.props.data.organisation_website}
                  >
                    {this.props.data.organisation_website}
                  </a>
                </span>

                <br />
              </div>
            ) : (
              ''
            )}
          </p>
        </div>

        {/* <div className="form-inline"> */}
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
                  to={`/admin/internships/edit/${this.props.data.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </NavLink>
              </div>
              <div className="col-auto">
                <NavLink
                  className="btn btn-danger btn-sm "
                  to={`/admin/internships/delete/${id}`}
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
