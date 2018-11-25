import React from "react";

const pagetitle = ({ heading, desc }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p className="max-width">{desc}</p>
    </div>
  );
};

export default pagetitle;
