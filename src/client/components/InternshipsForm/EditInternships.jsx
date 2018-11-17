import React, { Component } from 'react';
import InternshipsForm from './InternshipsForm';
import moment from 'moment';

class EditInternships extends Component {
  state = {
    isLoading: true,
    message: 'Loading data...',
    internshipsData: '',
  };

  componentDidMount() {
    const url = '/api/internships';
    const id = this.props.match.params.id;

    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data => {
        const temp_internship_add_date = moment(data.internship_add_date).format('YYYY-MM-DD');
        data.internship_add_date = temp_internship_add_date;
        const temp_internship_deadline = moment(data.internship_deadline).format('YYYY-MM-DD');
        data.internship_deadline = temp_internship_deadline;

        this.setState({
          isLoading: false,
          internshipsData: data,
        });
        console.log(data);
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>{this.state.message}</div>
    ) : (
      <InternshipsForm
        {...this.props}
        internshipsData={this.state.internshipsData}
        id={this.props.match.params.id}
        isEditing={true}
      />
    );
  }
}

export default EditInternships;
