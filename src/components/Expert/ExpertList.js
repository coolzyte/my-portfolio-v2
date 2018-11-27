import React from "react";
import ExpertCard from "./ExpertCard";
import { expertContent } from "./expertContent";
import Aux from "../../hoc/Aux";

const ExpertList = () => (
  <Aux>
    {expertContent.map((user, i) => {
      return (
        <ExpertCard
          key={i}
          id={expertContent[i].id}
          num={expertContent[i].num}
          title={expertContent[i].title}
          desc={expertContent[i].desc}
        />
      );
    })}
  </Aux>
);

export default ExpertList;
