import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/app.css";
import { BrowserRouter } from "react-router-dom";

import Routes from "./containers/routes";

const app = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
