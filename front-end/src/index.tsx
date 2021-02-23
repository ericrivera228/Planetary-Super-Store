// React imports
import React from "react";
import ReactDOM from "react-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Local imports
import "./index.css";
import PlanetStore from "./PlanetStore";

ReactDOM.render(
  <React.StrictMode>
    <PlanetStore />
  </React.StrictMode>,
  document.getElementById("root")
);
