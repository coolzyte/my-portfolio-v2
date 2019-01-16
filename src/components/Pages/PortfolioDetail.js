import React from "react";
import Banner from "../Banner/Banner";
import Details from "../Portfolio/Details";
import { projects } from "../Portfolio/projects";

const portfolio = () => {
  return (
    <div className="container">
      <Banner name="Portfolio-Details" />
      <Details projects={projects} />
    </div>
  );
};
export default portfolio;
