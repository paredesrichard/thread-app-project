import React from 'react';
import {Link} from "react-router-dom";

class NetworkingForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                networkingData: this.props.networkingData
            }
        } else {
            this.state = {
                networkingData: {
                    "organisation_name": "",
                    "sector_activity": "",
                    "organisation_description": "",
                    "organisation_logo": "",
                    "organisation_url": "",
                    "organisation_address": "",
                    "organisation_city": "",
                    "organisation_postal_code": "",
                    "contact_person": "",
                    "contact_email": "",
                    "contact_phone": "",
                    "active": 1
                }

            }
        }
    }
    updateFields = (e) => {
        //alert(e.target.name);
        const {name, value} = e.target
        this.setState({
            networkingData: {
                ...this.state.networkingData,
                [name]: value
            }

        })
    }
    submitForm = (e) => {
        e.preventDefault();
        //alert('bla') alert(JSON.stringify(this.state))
        console.log("NetworkingData from FORM", this.state.networkingData);
        var data = this.state.networkingData;
        let url = '',
            method = '';

        if (this.props.isEditing) {
            url = `/api/networking/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/networking`
            method = 'POST';
        }

        fetch(url, {
            method: 'post', //put
            body: JSON.stringify(this.state.networkingData),
                headers: {
                    'Content-Type': 'application/json '
                }
            })
            .then(res => res.text())
            .then(response => {
                console.log('Success:', response)

                //this.setState({displaySubmitForm:false});
            })
            .catch(error => console.log('Error', error));
    }
    render() {
        console.log("From <editnetworking------_>", this.state.networkingData);
        return (
            <div className="container">
                <h4>Networking Form</h4>
                <form onSubmit={this.submitForm} className="text-left">

                    <div>
                        <div>
                            <h1>
                                {`${this.props.isEditing
                                    ? "Edit"
                                    : "Add"} Networking`}</h1>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor='txtName'>organisation_name</label>
                                    <input
                                        className="form-control"
                                        type='text'
                                        id='organisation_name'
                                        name='organisation_name'
                                        placeholder="organisation_name...."
                                        value={this.state.networkingData.organisation_name}
                                        onChange={this.updateFields}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>sector_activity</label>
                                    <input
                                        className="form-control"
                                        id='sector_activity'
                                        name='sector_activity'
                                        placeholder="sector_activity..."
                                        value={this.state.networkingData.sector_activity}
                                        onChange={this.updateFields}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>organisation_logo</label>
                                    <input
                                        className="form-control"
                                        id='organisation_logo'
                                        name='organisation_logo'
                                        placeholder="organisation_logo"
                                        value={this.state.networkingData.organisation_logo}
                                        onChange={this.updateFields}/>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>organisation_url</label>
                                    <input
                                        className="form-control"
                                        id='organisation_url'
                                        name='organisation_url'
                                        placeholder="organisation_url"
                                        value={this.state.networkingData.organisation_url}
                                        onChange={this.updateFields}/>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>organisation_address</label>
                                    <input
                                        className="form-control"
                                        id='organisation_address'
                                        name='organisation_address'
                                        placeholder="organisation_address"
                                        value={this.state.networkingData.organisation_address}
                                        onChange={this.updateFields}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row"></div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <div className="form-group">

                                    <label>organisation_description</label>
                                    <textarea
                                        className="form-control"
                                        id='organisation_description'
                                        name='organisation_description'
                                        form="networkingFormId"
                                        rows="3"
                                        value={this.state.networkingData.organisation_description}
                                        onChange={this.updateFields}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>organisation_city</label>
                                <input
                                    className="form-control"
                                    id='organisation_city'
                                    name='organisation_city'
                                    placeholder="organisation_city"
                                    value={this.state.networkingData.organisation_city}
                                    onChange={this.updateFields}/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label>organisation_postal_code</label>
                                <input
                                    className="form-control"
                                    id='organisation_postal_code'
                                    name='organisation_postal_code'
                                    placeholder="organisation_postal_code"
                                    value={this.state.networkingData.organisation_postal_code}
                                    onChange={this.updateFields}/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>contact_person</label>
                                <input
                                    className="form-control"
                                    id='contact_person'
                                    name='contact_person'
                                    placeholder="contact_person"
                                    value={this.state.networkingData.contact_person}
                                    onChange={this.updateFields}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>contact_email</label>
                                <input
                                    className="form-control"
                                    id='contact_email'
                                    name='contact_email'
                                    placeholder="contact_email"
                                    value={this.state.networkingData.contact_email}
                                    onChange={this.updateFields}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>contact_phone</label>
                                <input
                                    className="form-control"
                                    id='contact_phone'
                                    name='contact_phone'
                                    placeholder="contact_phone"
                                    value={this.state.networkingData.contact_phone}
                                    onChange={this.updateFields}/>
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
                    <div className="form-row">
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-2">Save</button>
                        </div>
                        <div className="col-auto">
                            <Link to={`/networking`} className="btn btn-primary mb-2">cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        )

    }
}
export default NetworkingForm;