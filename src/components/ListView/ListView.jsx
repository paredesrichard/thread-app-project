import React, { Component } from "react";
import "./ListView.css";

import { fetchAPIData } from "../Api/api";

import Card from "./Card";

import MapComponent from "../MapComponent/MapComponent";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetchAPIData(
      "https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json"
    ).then(newData => {
      this.setState({ data: newData });
      console.log("newData:", newData);
    });
  }

  render() {
    return (
      <aside className="aside">
        <h2>Events</h2>
        {this.state.data
          ? this.state.data.map(data => {
              return <Card key={data.id} data={data} />;
            })
          : ""}
      </aside>
    );
  }
}

export default ListView;
