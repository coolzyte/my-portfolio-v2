import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import Category from "../Category/Category";
import RecentPost from "../RecentPost/RecentPost";
import classes from "./Sidebar.module.css";

const sidebar = () => {
  return (
    <div className="grid-item-4">
      <div className={classes.Sidebar}>
        <SearchBox />
        <Category />
        <RecentPost />

        <div className="categorie recent-post">
          <h3>Tags</h3>
          <ul className={classes.Tag}>
            <li>
              <a href="link-here">Corporate</a>
            </li>
            <li>
              <a href="link-here">Business</a>
            </li>
            <li>
              <a href="link-here">Clients</a>
            </li>
            <li>
              <a href="link-here">Ideas</a>
            </li>
            <li>
              <a href="link-here">Creative</a>
            </li>
            <li>
              <a href="link-here">Develop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default sidebar;
