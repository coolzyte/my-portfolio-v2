import React from "react";
import classes from "./Category.module.css";

const categories = () => {
  return (
    <div className={classes.Category}>
      <h3 className="sidebar-header">categories</h3>
      <ul className="list">
        <li>
          <a href="link-here">
            creative
            <span>(20)</span>
          </a>
        </li>
        <li>
          <a href="link-here">
            corporate
            <span>(40)</span>
          </a>
        </li>
        <li>
          <a href="link-here">
            business
            <span>(22)</span>
          </a>
        </li>
        <li>
          <a href="link-here">
            consultancy
            <span>(15)</span>
          </a>
        </li>
        <li>
          <a href="link-here">
            technology
            <span>(18)</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default categories;
