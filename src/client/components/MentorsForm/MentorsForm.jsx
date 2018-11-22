import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

class MentorsForm extends React.Component {
  constructor(props) {
    super(props);
    const { path } = this.props.match;

    if (this.props.isEditing) {
      this.state = {
        mentorsData: this.props.mentorsData,
      };
    } else if (path === '/admin/mentors/add') {
      this.state = {
        isEditing: true,
        mentorsData: {
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

  handleSubmit = event => {
    event.preventDefault();
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
      method,
      body: JSON.stringify(this.state.mentorsData),
      headers: {
        'Content-Type': 'application/json ',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);
        NotificationManager.success('Record saved');
        this.props.history.push('/mentors');
      })
      .catch(error => console.log('Error', error));
  };

  updateFields = e => {
    //alert(e.target.name);
    const { name, value } = e.target;
    this.setState({
      mentorsData: {
        ...this.state.mentorsData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <h3>Mentors Form</h3>

        <form onSubmit={this.handleSubmit} className="text-left">
          <div>
            <div>
              <h4>{`${this.props.isEditing ? 'Edit' : 'Add'} Mentor`}</h4>
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
                    value={this.state.mentorsData.first_name}
                    onChange={this.updateFields}
                    required
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
                    value={this.state.mentorsData.last_name}
                    onChange={this.updateFields}
                    required
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
                    value={this.state.mentorsData.email}
                    onChange={this.updateFields}
                    required
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
                    value={this.state.mentorsData.gender}
                    onChange={this.updateFields}
                    required
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
                    value={this.state.mentorsData.offering}
                    onChange={this.updateFields}
                    required
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
                    value={this.state.mentorsData.mentor_description}
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
                  value={this.state.mentorsData.languages}
                  onChange={this.updateFields}
                  required
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
                  value={this.state.mentorsData.availability}
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
                  value={this.state.mentorsData.affiliation}
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
                  value={this.state.mentorsData.area_location}
                  onChange={this.updateFields}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Preferred Meeting Place</label>
                <input
                  className="form-control"
                  id="preferred_meeting_place"
                  name="preferred_meeting_place"
                  placeholder="Preferred area"
                  value={this.state.mentorsData.preferred_meeting_place}
                  onChange={this.updateFields}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>Profile picture </label>
              <input
                type="text"
                className="form-control"
                id="profile_picture"
                name="profile_picture"
                value={this.state.mentorsData.profile_picture}
                onChange={this.updateFields}
              />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-end">
            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
            <div className="p-2">
              <Link to={`/mentors`} className="btn btn-danger mb-2">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default MentorsForm;
