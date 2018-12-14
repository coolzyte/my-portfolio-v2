import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/AboutPage";
import PortfolioPage from "../components/Pages/PortfolioPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutus" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
        </div>
      </Router>
    );
  }
}

export default App;
