import React from "react";

const ExpertCard = ({ num, desc, title }) => (
  <div className="grid-item">
    <span>{num}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default ExpertCard;
