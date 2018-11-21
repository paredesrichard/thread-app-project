import React, { Component } from 'react';
import MentorsForm from './MentorsForm';

class EditMentors extends Component {
  state = {
    isLoading: true,
    message: 'Loading data...',
    mentorsData: '',
  };

  componentDidMount() {
    const url = '/api/mentors';
    const id = this.props.match.params.id;

    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          mentorsData: data,
        });
        console.log(data);
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>{this.state.message}</div>
    ) : (
      <MentorsForm
        {...this.props}
        mentorsData={this.state.mentorsData}
        id={this.props.match.params.id}
        isEditing={true}
      />
    );
  }
}

export default EditMentors;
