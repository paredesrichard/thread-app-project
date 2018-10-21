import React, { Component } from "react";
import "./ListView.css";

import { fetchAPIData } from "../Api/api";

import Card from "./Card";

import MapComponent from "../MapComponent/MapComponent";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      coords: []
    };
  }

  componentDidMount() {
    let newCoords = [];
    fetchAPIData(
      "https://raw.githubusercontent.com/paredesrichard/commandline/master/events.json"
    ).then(newData => {
      this.setState({ data: newData });
      newCoords = newData.map(data => {
        let tempCoords = {};
        tempCoords = {
          lat: data.event_geo_lat,
          lng: data.event_geo_lng
        };
        return tempCoords;
      });
      this.setState({ coords: newCoords });
    });
  }

  render() {
    return (
      <div className="list-view-container">
        <aside className="aside">
          <h2>Events</h2>
          {this.state.data
            ? this.state.data.map(data => {
                return <Card key={data.id} data={data} />;
              })
            : ""}
        </aside>
        <div className="map-section">
          <MapComponent setMarker Zoom={11} coords={this.state.coords} />
        </div>
      </div>
    );
  }
}

export default ListView;
