import React from "react";

const Title = ({ heading, desc }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Title;
