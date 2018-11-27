import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import "./Newsletter.css";

const NewsLetter = () => {
  return (
    <section className="Newsletter">
      <div className="section-title">
        <PageTitle
          heading="Subscribe Newsletter"
          desc="But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the monen vai kemon asen"
        />
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
