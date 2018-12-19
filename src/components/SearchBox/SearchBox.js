import React from "react";
import classes from "./SearchBox.module.css";

const searchbox = () => {
  return (
    <div className={classes.SearchBox}>
      <h3>Search</h3>
      <form>
        <input type="text" placeholder="Enter Keywords" name="email" />
        <button type="submit">
          <i className="fa fa-paper-plane-o" />
        </button>
      </form>
    </div>
  );
};
export default searchbox;
