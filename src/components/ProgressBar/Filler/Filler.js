import React from "react";
import "./Filler.module.css";
import classes from "./Filler.module.css";

const filler = props => {
  return (
    <div className={classes.Filler} style={{ width: `${props.percentage}%` }} />
  );
};

export default filler;
