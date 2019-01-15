import React from "react";
import Button from "../Button/Button";
import Social from "../Social/Social";
import classes from "./Hero.module.css";

const Hero = () => (
  <div className={classes.Hero}>
    <div className={classes.TextContent}>
      <div>
        <h5>Hay there!</h5>
        <h1>
          I am Muhammed
          <h5>A Profesional Developer</h5>
        </h1>
      </div>
      <Button name="Make An Appointment" />
    </div>
    <ul className={classes.SocialMenu}>
      <Social />
    </ul>
  </div>
);

export default Hero;
