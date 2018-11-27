import React from "react";
import "./Banner.css";

const banner = ({ name }) => {
  return (
    <section className="banner">
      <div className="wrapper content">
        <h3 className="title">{name}</h3>
        <ol className="list">
          <li className="item">
            <a href="/">Home</a>
          </li>
          <li className="item active">{name}</li>
        </ol>
      </div>
    </section>
  );
};

export default banner;
