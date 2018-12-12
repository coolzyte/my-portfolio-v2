import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/AboutPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={HomePage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/aboutus`}
            component={AboutPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
