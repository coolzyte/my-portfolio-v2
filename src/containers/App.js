import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../components/Pages/HomePage";
import AboutPage from "../components/Pages/AboutPage";
import PortfolioPage from "../components/Pages/PortfolioPage";
import PortfolioDetail from "../components/Pages/PortfolioDetail";
import BlogPage from "../components/Pages/BlogPage";
import BlogDetail from "../components/BlogDetail/BlogDetail";
import ContactPage from "../components/Pages/ContactPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/aboutus" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/portfolio-details" component={PortfolioDetail} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-details" component={BlogDetail} />
          <Route path="/contact-us" component={ContactPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
