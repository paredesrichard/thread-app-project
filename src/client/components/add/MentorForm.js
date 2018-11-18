import React from 'react';
import { Link } from 'react-router-dom';

class MentorForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isEditing) {
      this.state = {
        mentorData: this.props.mentorData,
      };
    } else {
      this.state = {
        mentorData: {
          first_name: '',
          last_name: '',
          email: '',
          gender: '',
          profile_picture: '',
          mentor_description: '',
          languages: '',
          availability: '',
          offering: '',
          area_location: '',
          preferred_meeting_place: '',
          affiliation: '',
          active: 1,
        },
      };
    }
  }
  updateFields = e => {
    //alert(e.target.name);
    const { name, value } = e.target;
    this.setState({
      mentorData: {
        ...this.state.mentorData,
        [name]: value,
      },
    });
  };
  submitForm = e => {
    e.preventDefault();
    //alert('bla') alert(JSON.stringify(this.state))
    console.log('MentorData from FORM', this.state.mentorData);
    var data = this.state.mentorData;
    let url = '',
      method = '';

    if (this.props.isEditing) {
      url = `/api/mentors/${this.props.match.params.id}`;
      method = 'PUT';
    } else {
      url = `/api/mentors`;
      method = 'POST';
    }

    fetch(url, {
      method: 'post', //put
      body: JSON.stringify(this.state.mentorData),
      headers: {
        'Content-Type': 'application/json ',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);

        //this.setState({displaySubmitForm:false});
      })
      .catch(error => console.log('Error', error));
  };
  render() {
    console.log('From <editmentor------_>', this.state.mentorData);
    return (
      <div className="container">
        <div className="col-auto">
              <Link to={`/mentors`} className="btn btn-primary mb-2">
              Go Back To Mentors
              </Link>
            </div>

        <form onSubmit={this.submitForm} className="text-left">
          <div>
            <div>
              <h1>{`${this.props.isEditing ? 'Edit' : 'Add'} Mentor`}</h1>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="txtName">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="first_Name"
                    name="first_name"
                    placeholder="First name...."
                    value={this.state.mentorData.first_name}
                    onChange={this.updateFields}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    id="Last_Name"
                    name="last_name"
                    placeholder="Last name..."
                    value={this.state.mentorData.last_name}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-5">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Mentor's email"
                    value={this.state.mentorData.email}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label>Gender</label>
                  <input
                    className="form-control"
                    id="gender"
                    name="gender"
                    placeholder="gender"
                    value={this.state.mentorData.gender}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <label>Offering</label>
                  <input
                    className="form-control"
                    id="offering"
                    name="offering"
                    placeholder="Offering"
                    value={this.state.mentorData.offering}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
            </div>

            <div className="form-row" />
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label>Mentor's Description</label>
                  <textarea
                    className="form-control"
                    id="mentor_description"
                    name="mentor_description"
                    form="mentorFormId"
                    rows="3"
                    value={this.state.mentorData.mentor_description}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-5">
              <div className="form-group">
                <label>Languages</label>
                <input
                  className="form-control"
                  id="languages"
                  name="languages"
                  placeholder="Language"
                  value={this.state.mentorData.languages}
                  onChange={this.updateFields}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Availability</label>
                <input
                  className="form-control"
                  id="availability"
                  name="availability"
                  placeholder="Available dates"
                  value={this.state.mentorData.availability}
                  onChange={this.updateFields}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Affiliation</label>
                <input
                  className="form-control"
                  id="affiliation"
                  name="affiliation"
                  placeholder="Affiliation"
                  value={this.state.mentorData.affiliation}
                  onChange={this.updateFields}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Area Location</label>
                <input
                  className="form-control"
                  id="area_location"
                  name="area_location"
                  placeholder="Location"
                  value={this.state.mentorData.area_location}
                  onChange={this.updateFields}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Preferred Meeting Place</label>
                  <input
                    className="form-control"
                    id="preferred_meeting_place"
                    name="preferred_meeting_place"
                    placeholder="Preferred area"
                    value={this.state.mentorData.preferred_meeting_place}
                    onChange={this.updateFields}
                  />
                
              </div>
            </div>
          </div>
          <div>
            <div class="form-group">
              <label>
                Profile picture </label>
                <input
                  type="text"
                  className="form-control"
                  id="profile_picture"
                  name="profile_picture"
                  value={this.state.mentorData.profile_picture}
                  onChange={this.updateFields}
                />
             
            </div>
          </div>
          <div className="form-row">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
            <div className="col-auto">
              <Link to={`/mentors`} className="btn btn-primary mb-2">
                cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default MentorForm;
