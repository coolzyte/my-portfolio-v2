import React from "react";
import { Title } from "../UI/misc";
import AboutMe from "./About";
import Skillbar from "./Skillbar";
import "./Skill.css";

const Skill = () => {
  return (
    <section className="Skill">
      <div className="section-title">
        <Title>About Me</Title>
      </div>
      <div className="Content">
        <AboutMe />
        <Skillbar />
      </div>
    </section>
  );
};

export default Skill;
