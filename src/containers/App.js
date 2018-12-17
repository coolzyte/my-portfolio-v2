import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/AboutPage";
import PortfolioPage from "../components/Pages/PortfolioPage";
import BlogPage from "../components/Pages/BlogPage";
import BlogDetail from "../components/BlogDetail/BlogDetail";
import ContactPage from "../components/Pages/ContactPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutus" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/blog-details" component={BlogDetail} />
          <Route exact path="/contact-us" component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;
