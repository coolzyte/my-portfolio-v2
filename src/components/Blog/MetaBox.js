import React from "react";
import classes from "./MetaBox.module.css";

const metabox = () => {
  return (
    <ul className={classes.Meta}>
      <li className="blog__meta-date">
        <span>
          <i className="fa fa-calendar" aria-hidden="true" />
          oct 27, 2018
        </span>
      </li>
      <li>
        <i className="fa fa-user" aria-hidden="true" />
        By <a href="link-here"> Coolzyte</a>
      </li>
    </ul>
  );
};

export default metabox;
