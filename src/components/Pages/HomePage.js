import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import PortfolioList from "../Portfolio/PortfolioList";
import { portfolioContent } from "../Portfolio/portfolioContent";
// import Testimonial from "../Testimonial/Testimonial";
// import { testimonialsContent } from "../Testimonial/testimonialsContent";
// import NewsLetter from "../NewsLetter/NewsLetter";

const home = () => {
  return (
    <Layout>
      <Hero />
      <Skill />
      <PortfolioList robots={portfolioContent} />
    </Layout>
  );
};
export default home;
