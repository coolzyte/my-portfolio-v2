import React from "react";
import classes from "./PortfolioCard.module.css";

const portfoliocard = ({ id, name, email }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Image}>
        <img src={`https://robohash.org/${id}?200x200`} alt="" />
      </div>
      <div className={classes.Content}>
        <h2 className={classes.Title}>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default portfoliocard;
