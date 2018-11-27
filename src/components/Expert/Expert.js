import React from "react";
import about2 from "../../assets/images/about2.jpg";
import ExpertCard from "../Expert/ExpertCard";
import { expertContent } from "./expertContent";
import "./Expert.css";

const Expert = () => (
  <section className="expert p-tb">
    <div className="content item-grid-2">
      <div className="item m-top-4">
        <div className="image">
          <img src={about2} alt="me" />
        </div>
      </div>
      <div className="item">
        <div className="expert__heading">
          <h2 className="heading">I am expert on</h2>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            accunt of the
          </p>
        </div>
        <div className="grid m-top-3">
          <ExpertCard
            num={expertContent[0].num}
            title={expertContent[0].title}
            desc={expertContent[0].desc}
          />
          <ExpertCard
            num={expertContent[1].num}
            title={expertContent[1].title}
            desc={expertContent[1].desc}
          />
          <ExpertCard
            num={expertContent[2].num}
            title={expertContent[2].title}
            desc={expertContent[2].desc}
          />
          <ExpertCard
            num={expertContent[3].num}
            title={expertContent[3].title}
            desc={expertContent[3].desc}
          />
          {/* <ExpertList expertContent={expertContent} /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Expert;
