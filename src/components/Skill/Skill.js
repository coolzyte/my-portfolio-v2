import React from "react";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import classes from "./Skill.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Skill = props => {
  return (
    <section className={classes.Skill}>
      <div className="section-title">
        <PageTitle
          heading="Some Word's About Me"
          desc="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est"
        />
      </div>
      <div className={classes.Content}>
        <div>
          <p className="m-bottom-2">
            <span className={classes.Big}>S</span>
            abuj must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself
          </p>
          <p>
            Imust explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder
          </p>
          <Button name="Download CV" />
        </div>
        <div className={classes.ProgressBar}>
          <ProgressBar />
        </div>
      </div>
    </section>
  );
};

export default Skill;
