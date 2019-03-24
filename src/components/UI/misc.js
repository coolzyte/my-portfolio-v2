import React from "react";
import { Link } from "react-router-dom";

export const Title = props => {
  const template = (
    <div
      style={{
        textAlign: props.align
      }}
    >
      <h2>{props.children}</h2>
    </div>
  );

  if (props.link) {
    return <Link to={props.linkto}>{template}</Link>;
  } else {
    return template;
  }
};
