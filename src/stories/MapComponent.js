import React from "react";

import { storiesOf } from "@storybook/react";
import MapComponent from "../components/MapComponent/MapComponent";

storiesOf("MapComponent", module).add("Default setting", () => (
  <MapComponent />
));
