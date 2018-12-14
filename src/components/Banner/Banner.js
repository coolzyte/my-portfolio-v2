import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const banner = ({ name }) => {
  return (
    <section className="banner">
      <div className="wrapper content">
        <h3 className="title">{name}</h3>
        <ol className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item active">{name}</li>
        </ol>
      </div>
    </section>
  );
};

export default banner;
