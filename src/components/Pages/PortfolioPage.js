import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import PortfolioList from "../Portfolio/PortfolioList";
import { portfolioContent } from "../Portfolio/portfolioContent";

const portfolio = () => {
  return (
    <Layout>
      <Banner name="Portfolio" />
      <PortfolioList robots={portfolioContent} />
    </Layout>
  );
};
export default portfolio;
