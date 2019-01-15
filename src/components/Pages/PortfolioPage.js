import React from "react";
import Banner from "../Banner/Banner";
import PortfolioList from "../Portfolio/PortfolioList";
import { projects } from "../Portfolio/projects";

const portfolio = () => {
  return (
    <div className="container">
      <Banner name="Portfolio" />
      <PortfolioList projects={projects} />
    </div>
  );
};
export default portfolio;
