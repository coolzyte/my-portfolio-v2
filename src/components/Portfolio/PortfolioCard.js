import React from "react";
import { Link } from "react-router-dom";
// import classes from "./PortfolioCard.module.css";

const portfoliocard = ({ pic, name, desc }) => (
  <div className="grid-item">
    <div className="portfolio">
      <img src={pic} alt="portfolio" />
      <div className="portfolio-hover">
        <h3>
          <Link to="/portfolio-details">{name}</Link>
        </h3>
        <p>{desc}</p>
      </div>
      <div className="portfolio-action">
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
