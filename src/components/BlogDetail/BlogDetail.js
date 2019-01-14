import React, { Component } from "react";
import Banner from "../Banner/Banner";
import Details from "./Details";
import classes from "./BlogDetail.module.css";

class BlogDetail extends Component {
  render() {
    return (
      <div className="container">
        <Banner name="Blog Details" />
        <section className={classes.BlogDetail}>
          <Details />
        </section>
      </div>
    );
  }
}

export default BlogDetail;
