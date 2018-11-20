import React from "react";
import "./Social.module.css";
import Aux from "../../hoc/Aux";

const Social = () => {
  return (
    <Aux>
      <li>
        <a href="https://www.facebook.com/coolzyte">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/coolzyte">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/">
          <i className="fa fa-youtube" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="https://plus.google.com/114985536861119358076">
          <i className="fa fa-google-plus" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
      </li>
    </Aux>
  );
};

export default Social;
