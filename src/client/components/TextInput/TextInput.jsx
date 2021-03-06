import React, { Component } from "react";
import "./TextInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class TextInput extends Component {
  state = {
    inputValue: null
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue)
      console.log("form submitted", this.state.inputValue);
  };

  render() {
    return (
      <div className="input-container">
        <FontAwesomeIcon
          icon={faSearch}
          className="icon"
          onClick={this.handleSubmit}
        />
        <input
          className="input-field"
          type="text"
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.handleChange}
          id={this.props.name}
        />
      </div>
    );
  }
}

export default TextInput;
