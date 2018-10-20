import React from "react";

import { storiesOf } from "@storybook/react";
import MapComponent from "../components/MapComponent/MapComponent";

storiesOf("MapComponent", module)
  .add("Default setting", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent />
    </div>
  ))
  .add("set map center to HYF", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.661629, lng: 12.540446 }}
        setMarker
        Zoom={18}
      />
    </div>
  ))
  .add("set map to UCPH Zoom=14", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={14}
      />
    </div>
  ))
  .add("set map to UCPH Zoom=17", () => (
    <div style={{ width: `400px`, height: `400px` }}>
      <MapComponent
        mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
        setMarker
        Zoom={17}
      />
    </div>
  ));
