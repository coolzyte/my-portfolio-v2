import React from "react";
import Stripes from "./Stripes";
import Text from "./Text";
import Social from "../../Social/Social";
import classes from "./featured.module.css";

const Featured = () => (
  <div className={classes.Featured}>
    <Stripes />
    <Text />
    <ul className={classes.SocialMenu}>
      <Social />
    </ul>
  </div>
);

export default Featured;
