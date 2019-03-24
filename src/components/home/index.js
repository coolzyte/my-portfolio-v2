import React from "react";
import Featured from "./featured";
import Skill from "../Skill";
import PortfolioList from "../Portfolio/PortfolioList";
import { projects } from "../Portfolio/projects";
import NewsLetter from "../Newsletter/Newsletter";
import Testimonial from "../Testimonial/Testimonial";
import { testimonialsContent } from "../Testimonial/testimonialContent";

const Home = () => {
  return (
    <div className="container">
      <Featured />
      <Skill />
      <PortfolioList projects={projects} />
      <Testimonial testimonialsContent={testimonialsContent} />
      <NewsLetter />
    </div>
  );
};
export default Home;
