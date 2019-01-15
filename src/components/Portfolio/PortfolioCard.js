import React from "react";
import { Link } from "react-router-dom";
import classes from "./PortfolioCard.module.css";

const portfoliocard = ({ pic, name, desc }) => (
  <div className="grid-item">
    <div className={classes.Portfolio}>
      <img src={pic} alt="portfolio" />
      <div className={classes.PortfolioHover}>
        <h3>
          <Link to="/portfolio-details">{name}</Link>
        </h3>
        <p>{desc}</p>
      </div>
      <div className={classes.PortfolioAction}>
        <Link to="/portfolio-details">
          <span className="ti-link" />
        </Link>
        <Link to="" data-toggle="modal" data-target="#myModal">
          <span className="ti-zoom-in" />
        </Link>
      </div>
    </div>
  </div>
);
export default portfoliocard;
