import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";
import Expert from "../Expert/Expert";
import NewsLetter from "../Newsletter/Newsletter";

const about = () => {
  return (
    <Layout>
      <Banner name="About Me" />
      <Skill />
      <Expert />
      <NewsLetter />
    </Layout>
  );
};
export default about;
