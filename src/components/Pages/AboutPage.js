import React from "react";
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";
import Expert from "../Expert/Expert";
import NewsLetter from "../Newsletter/Newsletter";

const about = () => {
  return (
    <div className="container">
      <Banner name="About Me" />
      <Skill />
      <Expert />
      <NewsLetter />
    </div>
  );
};
export default about;
