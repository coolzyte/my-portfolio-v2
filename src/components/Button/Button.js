import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Button.module.css";

const Button = ({ name }) => (
  <Aux>
    <a href="/contact-us" className={classes.Btn}>
      {name}
    </a>
  </Aux>
);

export default Button;
