import React from "react";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import PortfolioList from "../Portfolio/PortfolioList";
import { projects } from "../Portfolio/projects";
import NewsLetter from "../Newsletter/Newsletter";
import Testimonial from "../Testimonial/Testimonial";
import { testimonialsContent } from "../Testimonial/testimonialContent";

const home = () => {
  return (
    <div className="container">
      <Hero />
      <Skill />
      <PortfolioList projects={projects} />
      <Testimonial testimonialsContent={testimonialsContent} />
      <NewsLetter />
    </div>
  );
};
export default home;
