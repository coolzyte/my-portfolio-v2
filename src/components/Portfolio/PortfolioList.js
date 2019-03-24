import React from "react";
import PortfolioCard from "./PortfolioCard";
import { Title } from "../UI/misc";
import classes from "./PortfolioList.module.css";

const portfoliolist = ({ projects }) => {
  return (
    <div className={classes.PortfolioList}>
      <Title>Check Latest Work</Title>

      <div className={classes.CardList}>
        {projects.map((project, i) => {
          return (
            <PortfolioCard
              key={i}
              id={projects[i].id}
              name={projects[i].name}
              desc={projects[i].desc}
              pic={projects[i].pic}
            />
          );
        })}
      </div>
    </div>
  );
};

export default portfoliolist;
