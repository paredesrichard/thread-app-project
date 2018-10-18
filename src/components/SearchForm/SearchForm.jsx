import React, { Component } from "react";

import TextInput from "../TextInput/TextInput";
import Select from "../Select/Select";
import "./SearchForm.css";

class SearchForm extends Component {
  render() {
    return (
      <div className="search-container">
        <Select />
        <TextInput placeholder={"Job title"} name={"jobtitle"} />
        <TextInput placeholder={"Location"} name={"location"} />
      </div>
    );
  }
}

export default SearchForm;
