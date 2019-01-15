import React from "react";
import PortfolioCard from "./PortfolioCard";
import PageTitle from "../PageTitle/PageTitle";
import classes from "./PortfolioList.module.css";

const portfoliolist = ({ projects }) => {
  return (
    <div className={classes.PortfolioList}>
      <div className="section-title-left">
        <PageTitle
          heading="CHECK LATEST WORK"
          desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the monen vai kemon asen"
        />
      </div>
      <div className={classes.CardList}>
        {projects.map((user, i) => {
          return (
            <PortfolioCard
              key={i}
              id={projects[i].id}
              name={projects[i].name}
              email={projects[i].email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default portfoliolist;
