import React from "react";
import Stripes from "./Stripes";
import Button from "../../Button/Button";
import Social from "../../Social/Social";
import classes from "./featured.module.css";

const Featured = () => (
  <div className={classes.Featured}>
    <Stripes />
    {/* <div className={classes.TextContent}>
      <div>
        <h5>Hi!</h5>
        <h1>
          I'm Tunde
          <h5>A Profesional Developer</h5>
        </h1>
      </div>
      <Button name="Make An Appointment" />
    </div> */}
    <ul className={classes.SocialMenu}>
      <Social />
    </ul>
  </div>
);

export default Featured;
