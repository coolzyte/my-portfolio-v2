import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import Details from "./Details";
import classes from "./BlogDetail.module.css";

class BlogDetail extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Banner name="Blog Details" />
          <section className={classes.BlogDetail}>
            <Details />
          </section>
        </Layout>
      </Aux>
    );
  }
}

export default BlogDetail;
