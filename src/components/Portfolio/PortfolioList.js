import React from "react";
import PortfolioCard from "./PortfolioCard";
import PageTitle from "../PageTitle/PageTitle";
import classes from "./PortfolioList.module.css";

const portfoliolist = ({ robots }) => {
  return (
    <div className={classes.PortfolioList}>
      <div className="section-title-left">
        <PageTitle
          heading="CHECK LATEST WORK"
          desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the monen vai kemon asen"
        />
      </div>
      <div className={classes.CardList}>
        {robots.map((user, i) => {
          return (
            <PortfolioCard
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </div>
  );
};
export default portfoliolist;
