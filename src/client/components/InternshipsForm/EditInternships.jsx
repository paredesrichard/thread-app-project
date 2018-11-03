import React, { Component } from 'react';
import InternshipsForm from './InternshipsForm';


class EditInternships extends Component {

  state = {
    isLoading: true,
    message: 'Loading data...',
    internshipsData: "",
  }


  render() {

    return (
      <h4>Editing internships table...</h4>
    )
  }
}

export default EditInternships;