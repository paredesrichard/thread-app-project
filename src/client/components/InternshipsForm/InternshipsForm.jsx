import React, { Component } from 'react';

import { fetchAPIData } from '../Api/api';

class InternshipsForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchAPIData('/api/internships').then(newData => {
      this.setState({ data: newData });
    });
  }

  handleSubmit = (event) => {
    alert('Form submitted')
    event.preventDefault();
  }



  render() {
    return (
      <div className="container">
        <h4>Internships Form</h4>
        <form onSubmit={this.handleSubmit} className="text-left" id="internshipFormId">

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="txtInternshipTitle">Internship Title: </label>
                <input type="text" className="form-control" id="txtInternshipTitle" placeholder="Internship title..." />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="txtInternshipCategory">Internship Category: </label>
                <input type="text" className="form-control" id="txtInternshipCategory" placeholder="Internship category..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="txtOrganisationName">Organisation Name:</label>
                <input type="text" className="form-control" id="txtOrganisationName" placeholder="Organisation name..." />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="txtDepartment">Department Name:</label>
                <input type="text" className="form-control" id="txtDepartment" placeholder="Department  ..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label for="textInternshipDescription">Internship Description:</label>
                  <textarea className="form-control" id="textInternshipDescription" form="internshipFormId" rows="3" />
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label for="textOrganisationDescription">Organisation Description:</label>
                  <textarea className="form-control" id="textOrganisationDescription" form="internshipFormId" rows="3" />
                </div>
              </div>
            </div>
          </div>

          {/* Form checkbox */}
          <div className="form-row">
            <div className="col-md-3">
              <div className="form-group form-check">
                <input class="form-check-input" type="checkbox" id="chkInternshipAgreement" />
                <label class="form-check-label" for="chkInternshipAgreement">
                  Internship Agreement
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group form-check">
                <input class="form-check-input" type="checkbox" id="chkInternshipRequirements" />
                <label class="form-check-label" for="chkInternshipRequirements">
                  Internship Requirements
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="txtApplicationRequirements">Application Requirements:</label>
                <input type="text" className="form-control" id="txtApplicationRequirements" placeholder="Application requirements..." />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="txtInternshipAvailabilitySchedule">Application Requirements:</label>
                <input type="text" className="form-control" id="txtInternshipAvailabilitySchedule" placeholder="Internship Availability..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-2">
              <div className="form-group">
                <label for="txtTravelExpenses">Travel Expenses:</label>
                <input type="text" className="form-control" id="txtTravelExpenses" placeholder="Travel expenses..." />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label for="txtLocation">Location:</label>
                <input type="text" className="form-control" id="txtLocation" placeholder="Location..." />
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group">
                <label for="txtInternshipAddDate">Internship Add Date:</label>
                <input type="text" className="form-control" id="txtInternshipAddDate" placeholder="Internship add date..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-2">
              <div className="form-group form-check">
                <input class="form-check-input" type="checkbox" id="chkClosingDate" />
                <label class="form-check-label" for="chkClosingDate">
                  Closing date
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label for="txtInternshipDeadline">Internship Deadline:</label>
                <input type="text" className="form-control" id="txtInternshipDeadline" placeholder="Internship deadline..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label for="txtContactPerson">Contact Person:</label>
                <input type="text" className="form-control" id="txtContactPerson" placeholder="Contact person..." />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label for="txtPhoneContact">Contact Number:</label>
                <input type="text" className="form-control" id="txtPhoneContact" placeholder="Contact number..." />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label for="txtEmailContact">Email:</label>
                <input type="text" className="form-control" id="txtEmailContact" placeholder="Email..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label for="txtOrganisationAddress">Organisation Address:</label>
                <input type="text" className="form-control" id="txtOrganisationAddress" placeholder="Organisation Address..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label for="txtOrganisationWebsite">Organisation Website:</label>
                <input type="text" className="form-control" id="txtOrganisationWebsite" placeholder="Organisation Website..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label for="txtInternshipThemeImage">Theme Image:</label>
                <input type="text" className="form-control" id="txtInternshipThemeImage" placeholder="Internship Theme Image..." />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-auto">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
            <div className="col-md-auto">
              <button type="submit" class="btn btn-primary mb-2">Cancel</button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default InternshipsForm;