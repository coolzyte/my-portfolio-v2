import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../hoc/Layout";
import Home from "../components/home";
import About from "../components/about";
import PortfolioPage from "../components/Pages/PortfolioPage";
import PortfolioDetail from "../components/Pages/PortfolioDetail";
import Blog from "../components/blog";
import BlogDetail from "../components/BlogDetail/BlogDetail";
import ContactPage from "../components/Pages/ContactPage";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio-details" component={PortfolioDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-details" component={BlogDetail} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Layout>
  );
};

export default Routes;
