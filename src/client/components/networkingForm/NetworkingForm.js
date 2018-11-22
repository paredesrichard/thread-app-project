import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

class NetworkingForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isEditing) {
      this.state = {
        networkingData: this.props.networkingData,
      };
    } else {
      this.state = {
        networkingData: {
          organisation_name: '',
          sector_activity: '',
          organisation_description: '',
          organisation_logo: '',
          organisation_url: '',
          organisation_address: '',
          organisation_city: '',
          organisation_postal_code: '',
          contact_person: '',
          contact_email: '',
          contact_phone: '',
          active: 1,
        },
      };
    }
  }
  updateFields = e => {
    //alert(e.target.name);
    const { name, value } = e.target;
    this.setState({
      networkingData: {
        ...this.state.networkingData,
        [name]: value,
      },
    });
  };
  submitForm = e => {
    e.preventDefault();
    var data = this.state.networkingData;
    let url = '',
      method = '';

    if (this.props.isEditing) {
      url = `/api/networking/${this.props.match.params.id}`;
      method = 'PUT';
    } else {
      url = `/api/networking`;
      method = 'POST';
    }

    fetch(url, {
      method,
      body: JSON.stringify(this.state.networkingData),
      headers: {
        'Content-Type': 'application/json ',
      },
    })
      .then(res => res.text())
      .then(response => {
        console.log('Success:', response);
        NotificationManager.success('Record saved');
        this.props.history.push('/networking');
      })
      .catch(error => console.log('Error', error));
  };
  render() {
    return (
      <div className="container">
        <h3>Networking Form</h3>
        <form onSubmit={this.submitForm} className="text-left">
          <div>
            <div>
              <h4>{`${this.props.isEditing ? 'Edit' : 'Add'} Networking`}</h4>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="txtName">Organisation Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="organisation_name"
                    name="organisation_name"
                    placeholder="Organisation Name...."
                    value={this.state.networkingData.organisation_name}
                    onChange={this.updateFields}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Sector Activity</label>
                  <input
                    className="form-control"
                    id="sector_activity"
                    name="sector_activity"
                    placeholder="Sector Activity..."
                    value={this.state.networkingData.sector_activity}
                    onChange={this.updateFields}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-5">
                <div className="form-group">
                  <label>Organisation Logo Link</label>
                  <input
                    className="form-control"
                    id="organisation_logo"
                    name="organisation_logo"
                    placeholder="Organisation logo link"
                    value={this.state.networkingData.organisation_logo}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label>Organisation URL</label>
                  <input
                    className="form-control"
                    id="organisation_url"
                    name="organisation_url"
                    placeholder="Organisation URL"
                    value={this.state.networkingData.organisation_url}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-group">
                  <label>Organisation Address</label>
                  <input
                    className="form-control"
                    id="organisation_address"
                    name="organisation_address"
                    placeholder="Organisation Address"
                    value={this.state.networkingData.organisation_address}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
            </div>

            <div className="form-row" />
            <div className="col-md-12">
              <div className="form-group">
                <div className="form-group">
                  <label>Organisation Description</label>
                  <textarea
                    className="form-control"
                    id="organisation_description"
                    name="organisation_description"
                    form="networkingFormId"
                    rows="3"
                    value={this.state.networkingData.organisation_description}
                    onChange={this.updateFields}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-5">
              <div className="form-group">
                <label>Organisation City</label>
                <input
                  className="form-control"
                  id="organisation_city"
                  name="organisation_city"
                  placeholder="Organisation City"
                  value={this.state.networkingData.organisation_city}
                  onChange={this.updateFields}
                />
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <label>Organisation Postal Code</label>
                <input
                  className="form-control"
                  id="organisation_postal_code"
                  name="organisation_postal_code"
                  placeholder="Postal Code"
                  value={this.state.networkingData.organisation_postal_code}
                  onChange={this.updateFields}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Contact Person</label>
                <input
                  className="form-control"
                  id="contact_person"
                  name="contact_person"
                  placeholder="Contact Person"
                  value={this.state.networkingData.contact_person}
                  onChange={this.updateFields}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  id="contact_email"
                  name="contact_email"
                  placeholder="Email"
                  value={this.state.networkingData.contact_email}
                  onChange={this.updateFields}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  className="form-control"
                  id="contact_phone"
                  name="contact_phone"
                  placeholder="Contact Number"
                  value={this.state.networkingData.contact_phone}
                  onChange={this.updateFields}
                />
              </div>
            </div>
          </div>
          {/*
                    <div>
                        <div class="form-group">
                            <label>profile_picture</label>
                            <input
                                type="text"
                                className="form-control"
                                id='profile_picture'
                                name='profile_picture'
                                value={this.state.networkingData.profile_picture}
                                onChange={this.updateFields}/>
                        </div>
                    </div>
                    */}
          <div className="d-flex flex-row justify-content-end">
            <div className="p-2">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
            <div className="p-2">
              <Link to={`/networking`} className="btn btn-danger mb-2">
                cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NetworkingForm;
