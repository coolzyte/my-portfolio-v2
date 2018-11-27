import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import PortfolioList from "../Portfolio/PortfolioList";
import { portfolioContent } from "../Portfolio/portfolioContent";
import NewsLetter from "../Newsletter/Newsletter";
import Testimonial from "../Testimonial/Testimonial";
import { testimonialsContent } from "../Testimonial/testimonialContent";

const home = () => {
  return (
    <Layout>
      <Hero />
      <Skill />
      <PortfolioList robots={portfolioContent} />
      <Testimonial testimonialsContent={testimonialsContent} />
      <NewsLetter />
    </Layout>
  );
};
export default home;
