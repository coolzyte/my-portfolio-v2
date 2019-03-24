import React from "react";
import { Title } from "../UI/misc";
import "./Newsletter.css";

const NewsLetter = () => {
  return (
    <section className="Newsletter">
      <div className="section-title">
        <Title>Subscribe Newsletter</Title>
      </div>
      <div className="Box">
        <form>
          <input
            type="text"
            className="Input"
            placeholder="Your email address..."
            name="email"
          />
          <button type="submit" className="Submit">
            <i className="fa fa-paper-plane-o" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
