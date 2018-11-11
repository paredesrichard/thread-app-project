import React, { Component } from 'react';
import { fetchAPIData } from '../Api/api';

class InternshipsSearchForm extends Component {
  state = {
    data: [],
    internSearchWord: '',
    fieldName: 'internship_title',
    orderBy: 'internship_title',
    sortBy: 'ASC',
  };

  updateField = e => {
    let { name, value } = e.target;
    value = e.target.type === 'checkbox' ? e.target.checked : value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let url = `/api/internships/search?${this.state.fieldName}=${
      this.state.internSearchWord
    }&orderby=${this.state.orderBy}&sort=${this.state.sortBy}`;
    alert('form submitted');
    fetchAPIData(url).then(newData => {
      this.setState({ data: newData });
      console.log('data', this.state.data);
    });
    //   method = 'GET';

    // fetch(url, {
    //   method,
    //   body: JSON.stringify(this.state.internshipsData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(res => res.text())
    //   .then(response => {
    //     console.log('Success:', response);
    //   })
    //   .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-3">
              <div className="form-group text-left">
                <label for="txtInternSearchWord">Search:</label>
                <input
                  type="text"
                  name="internSearchWord"
                  className="form-control"
                  id="txtinternSearchWord"
                  placeholder="Search keyword..."
                  onChange={this.updateField}
                  value={this.state.searchWord}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group text-left">
                <label>Search by:</label>
                <select
                  name="fieldName"
                  className="custom-select custom-select-sm"
                  onChange={this.updateField}
                >
                  <option selected value="internship_title">
                    Internship Title
                  </option>
                  <option value="organisation_name">Organisation Name</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-md-1">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary mt-2 align-self-end"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InternshipsSearchForm;
