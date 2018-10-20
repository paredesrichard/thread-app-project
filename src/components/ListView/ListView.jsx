import React, { Component } from "react";
import "./ListView.css";

import fetchAPIData from "../Api/api";

import Card from "./Card";

class ListView extends Component {
  render() {
    return (
      <div className="list-view-container">
        <Card description={"sample description"} />
      </div>
    );
  }
}

export default ListView;
