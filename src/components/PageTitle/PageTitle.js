import React from "react";
import classes from "./PageTitle.module.css";

const pagetitle = ({ heading, desc }) => {
  return (
    <div className={classes.PageTitle}>
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default pagetitle;
