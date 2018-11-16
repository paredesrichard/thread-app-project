import React, { Component } from 'react';
import InternshipsForm from './InternshipsForm';

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
