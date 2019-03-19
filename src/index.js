import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./containers/routes";

const app = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
