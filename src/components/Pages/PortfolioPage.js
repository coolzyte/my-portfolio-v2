import React from "react";
import Banner from "../Banner/Banner";
import PortfolioList from "../Portfolio/PortfolioList";
import { portfolioContent } from "../Portfolio/portfolioContent";

const portfolio = () => {
  return (
    <div className="container">
      <Banner name="Portfolio" />
      <PortfolioList robots={portfolioContent} />
    </div>
  );
};
export default portfolio;
