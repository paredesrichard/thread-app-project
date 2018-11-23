import React, { Component } from 'react';
import './Card.css';
import { NavLink, Link } from 'react-router-dom';

import LoginContext from '../../contexts/login';
//import DeleteRecord from '../DeleteRecord/DeleteRecord';
//import { noAuto } from '@fortawesome/fontawesome-svg-core';
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

    const imageStyle = {
      height: '120px',
      width: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // backgroundImage: `url("${this.props.data.internship_theme_image}")`,
    };
    return (
      <div
        className="card m-2 shadow-lg rounded text-left"
         style={{ width: `95%` }} 
      >
        {/* <img
          src={this.props.data.internship_theme_image}
          className="internships-thumb-nail-img"
          alt="thumbnail"
        /> */}
        <div className="thumbnail-img-container" style={imageStyle}>
          <img
            src={this.props.data.internship_theme_image}
            className="internships-thumb-nail-img"
            alt="thumbnail"
          />
        </div>
        <div className="card-body h-auto p-1 text-wrap">
          <p className="card-text">
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
              <React.Fragment>
                <span className="card-label">Department : </span>
                {this.props.data.department}
                <br />
                <span className="card-label">Internship Description : </span>
                {this.props.data.internship_description}
                <br />
                <span className="card-label">Organisation Description : </span>
                {this.props.data.organisation_description}
                <br />
                {/* <span className="card-label">Agreement? : </span>
                {this.props.data.internship_agreement ? 'Yes' : 'No'}
                <br />
                <span className="card-label">Requirements : </span>
                {this.props.data.internship_requirements ? 'Yes' : 'No'}
                <br /> */}
                <span className="card-label">Application Requirements : </span>
                {this.props.data.application_requirements}
                <br />
                <span className="card-label">Availability Schedule : </span>
                {this.props.data.internship_availabiltiy_schedule}
                <br />
                  {/* <span className="card-label">Travel Expenses : </span>
                  {this.props.data.travel_expenses ? 'Yes' : 'No'}
                  <br /> */}
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
                  <NavLink
                    className="text-secondary text-truncate"
                    to={this.props.data.organisation_website}
                  >
                    Click Here!
                  </NavLink>
                </span>

                <br />
              </React.Fragment>
            ) : (
              ''
            )}
          </p>
        </div>

        {/* <div className="form-inline"> */}
        <div className="d-flex justify-content-between card-footer px-0">
          <button
            className="btn btn-primary btn-sm mr-auto m-1"
            onClick={() => {
              this.setState({ readMore: !this.state.readMore });
            }}
          >
            {this.state.readMore ? 'View details' : 'Hide details'}
          </button>

          {contextType.isLoggedIn ? (
            <React.Fragment>
              <NavLink
                to={`/admin/internships/edit/${this.props.data.id}`}
                className="btn btn-primary btn-sm m-1"
              >
                Edit
              </NavLink>
              <NavLink
                className="btn btn-danger btn-sm m-1"
                to={`/admin/internships/delete/${id}`}
              >
                Delete
              </NavLink>
            </React.Fragment>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default Card;
