import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";
import Expert from "../Expert/Expert";
import NewsLetter from "../Newsletter/Newsletter";
import classes from "../Pages/AboutPage.module.css";

const about = () => {
  return (
    <Layout>
      <Banner name="About Me" />
      <section className={classes.AboutPage}>
        <Skill />
        <Expert />
        <NewsLetter />
      </section>
    </Layout>
  );
};
export default about;
