import React, { Component } from "react";
import "./ListView.css";

import { fetchAPIData } from "../Api/api";

import Card from "./Card";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetchAPIData("https://my.api.mockaroo.com/events.json?key=d38d0f10").then(
      newData => {
        this.setState({ data: newData });
        console.log("newData:", newData);
      }
    );
  }

  render() {
    return (
      <div className="aside">
        {this.state.data
          ? this.state.data.map(data => {
              return <Card key={data.id} data={data} />;
            })
          : ""}
      </div>
    );
  }
}

export default ListView;
