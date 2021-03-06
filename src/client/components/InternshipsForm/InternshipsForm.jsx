import React, { Component } from 'react';

import { fetchAPIData } from '../Api/api';

import { NavLink } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

class InternshipsForm extends Component {
  constructor(props) {
    super(props);
    const { path } = this.props.match;

    if (this.props.isEditing) {
      this.state = {
        internshipsData: this.props.internshipsData,
      };
    } else if (path === '/admin/internships/add') {
      this.state = {
        isEditing: true,
        internshipsData: {
          internship_title: undefined,
          internship_category: '',
          organisation_name: '',
          department: '',
          internship_description: '',
          organisation_description: '',
          internship_agreement: false,
          internship_requirements: false,
          application_requirements: '',
          internship_availabiltiy_schedule: '',
          travel_expenses: false,
          location: '',
          internship_add_date: '',
          closing_date: false,
          internship_deadline: '',
          contact_person: '',
          phone_contact: '',
          email_contact: '',
          organisation_address: '',
          organisation_website: '',
          internship_theme_image: '',
          active: true,
        },
      };
    }
  }

  // componentDidMount() {
  //   fetchAPIData('/api/internships').then(newData => {
  //     this.setState({ data: newData });
  //   });
  // }

  handleSubmit = event => {
    event.preventDefault();
    let url = '',
      method = '';

    if (this.props.isEditing) {
      url = `/api/internships/${this.props.match.params.id}`;
      method = 'PUT';
    } else {
      url = `/api/internships`;
      method = 'POST';
    }

    fetch(url, {
      method,
      body: JSON.stringify(this.state.internshipsData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);
        NotificationManager.success('Record saved');
        this.props.history.push('/internships');
      })
      .catch(error => console.log('Error:', error));
  };

  updateField = e => {
    let { name, value } = e.target;
    value = e.target.type === 'checkbox' ? e.target.checked : value;
    this.setState({
      internshipsData: {
        ...this.state.internshipsData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Internships Form</h3>
        <form
          onSubmit={this.handleSubmit}
          className="text-left"
          id="internshipFormId"
        >
          <div>
            <h4>{`${this.props.isEditing ? 'Edit' : 'Add'} Internship`}</h4>
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtInternshipTitle">Internship Title: </label>
                <input
                  type="text"
                  name="internship_title"
                  className="form-control"
                  id="txtInternshipTitle"
                  placeholder="Internship title..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.internship_title}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtInternshipCategory">
                  Internship Category:{' '}
                </label>
                <input
                  type="text"
                  name="internship_category"
                  className="form-control"
                  id="txtInternshipCategory"
                  placeholder="Internship category..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.internship_category}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtOrganisationName">Organisation Name:</label>
                <input
                  type="text"
                  name="organisation_name"
                  className="form-control"
                  id="txtOrganisationName"
                  placeholder="Organisation name..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.organisation_name}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtDepartment">Department Name:</label>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  id="txtDepartment"
                  placeholder="Department  ..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.department}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="textInternshipDescription">
                    Internship Description:
                  </label>
                  <textarea
                    name="internship_description"
                    className="form-control"
                    id="textInternshipDescription"
                    form="internshipFormId"
                    rows="3"
                    onChange={this.updateField}
                    value={this.state.internshipsData.internship_description}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="textOrganisationDescription">
                    Organisation Description:
                  </label>
                  <textarea
                    name="organisation_description"
                    className="form-control"
                    id="textOrganisationDescription"
                    form="internshipFormId"
                    rows="3"
                    onChange={this.updateField}
                    value={this.state.internshipsData.organisation_description}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form checkbox */}
          <div className="form-row">
            <div className="col-md-3">
              <div className="form-group form-check">
                <input
                  name="internship_agreement"
                  className="form-check-input"
                  type="checkbox"
                  id="chkInternshipAgreement"
                  onChange={this.updateField}
                  defaultChecked={
                    this.state.internshipsData.internship_agreement
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="chkInternshipAgreement"
                >
                  Internship Agreement
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group form-check">
                <input
                  name="internship_requirements"
                  className="form-check-input"
                  type="checkbox"
                  id="chkInternshipRequirements"
                  onChange={this.updateField}
                  defaultChecked={
                    this.state.internshipsData.internship_requirements
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="chkInternshipRequirements"
                >
                  Internship Requirements
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtApplicationRequirements">
                  Application Requirements:
                </label>
                <input
                  name="application_requirements"
                  type="text"
                  className="form-control"
                  id="txtApplicationRequirements"
                  placeholder="Application requirements..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.application_requirements}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="txtInternshipAvailabilitySchedule">
                  Internship availabiltiy schedule:
                </label>
                <input
                  name="internship_availabiltiy_schedule"
                  type="text"
                  className="form-control"
                  id="txtInternshipAvailabilitySchedule"
                  placeholder="Internship Availability..."
                  onChange={this.updateField}
                  value={
                    this.state.internshipsData.internship_availabiltiy_schedule
                  }
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-2">
              <div className="form-group form-check">
                <input
                  name="travel_expenses"
                  type="checkbox"
                  className="form-check-input"
                  id="chkTravelExpenses"
                  onChange={this.updateField}
                  defaultChecked={this.state.internshipsData.travel_expendes}
                />
                <label htmlFor="chkTravelExpenses">Travel Expenses</label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="txtLocation">Location:</label>
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  id="txtLocation"
                  placeholder="Location..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.location}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor="txtInternshipAddDate">
                  Internship Add Date:
                </label>
                <input
                  name="internship_add_date"
                  type="date"
                  className="form-control"
                  id="txtInternshipAddDate"
                  placeholder="Internship add date..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.internship_add_date}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-2">
              <div className="form-group form-check">
                <input
                  name="closing_date"
                  className="form-check-input"
                  type="checkbox"
                  id="chkClosingDate"
                  onChange={this.updateField}
                  defaultChecked={this.state.internshipsData.closing_date}
                />
                <label className="form-check-label" for="chkClosingDate">
                  Closing date
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtInternshipDeadline">
                  Internship Deadline:
                </label>
                <input
                  name="internship_deadline"
                  type="date"
                  className="form-control"
                  id="txtInternshipDeadline"
                  placeholder="Internship deadline..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.internship_deadline}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtContactPerson">Contact Person:</label>
                <input
                  name="contact_person"
                  type="text"
                  className="form-control"
                  id="txtContactPerson"
                  placeholder="Contact person..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.contact_person}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label fhtmlForor="txtPhoneContact">Contact Number:</label>
                <input
                  name="phone_contact"
                  type="text"
                  className="form-control"
                  id="txtPhoneContact"
                  placeholder="Contact number..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.phone_contact}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="txtEmailContact">Email:</label>
                <input
                  name="email_contact"
                  type="email"
                  className="form-control"
                  id="txtEmailContact"
                  placeholder="Email..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.email_contact}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="txtOrganisationAddress">
                  Organisation Address:
                </label>
                <input
                  name="organisation_address"
                  type="text"
                  className="form-control"
                  id="txtOrganisationAddress"
                  placeholder="Organisation Address..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.organisation_address}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="txtOrganisationWebsite">
                  Organisation Website:
                </label>
                <input
                  name="organisation_website"
                  type="text"
                  className="form-control"
                  id="txtOrganisationWebsite"
                  placeholder="Organisation Website..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.organisation_website}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="txtInternshipThemeImage">Theme Image:</label>
                <input
                  name="internship_theme_image"
                  type="text"
                  className="form-control"
                  id="txtInternshipThemeImage"
                  placeholder="Internship Theme Image..."
                  onChange={this.updateField}
                  value={this.state.internshipsData.internship_theme_image}
                />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-end">
            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
            <div className="p-2">
              <NavLink to={`/internships`} className="btn btn-danger mb-2">
                Cancel
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InternshipsForm;
