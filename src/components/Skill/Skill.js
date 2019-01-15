import React, { Component } from "react";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import classes from "./Skill.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressbar: [
        { title: "UX Design", percentage: 85 },
        { title: "UI Design", percentage: 90 },
        { title: "Web Design", percentage: 75 },
        { title: "Web Development", percentage: 90 }
      ]
    };
  }
  render() {
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
              mall or big, your business will love our financial help and
              business consultations! We are happy when our clients are too…
              Actually, this is quite simple to achieve – because each time we
              help them in sorting out different accounting intricacies or save
              the day before filing the taxes, they are happy indeed! And so are
              we!
            </p>
            <h3>
              We have over four years of successful experience in Web
              development sphere in Nigeria market.
            </h3>
            <Button name="Download CV" />
          </div>
          <div className={classes.ProgressBar}>
            <ProgressBar
              title={this.state.progressbar[0].title}
              percentage={this.state.progressbar[0].percentage}
            />
            <ProgressBar
              title={this.state.progressbar[1].title}
              percentage={this.state.progressbar[1].percentage}
            />
            <ProgressBar
              title={this.state.progressbar[2].title}
              percentage={this.state.progressbar[2].percentage}
            />
            <ProgressBar
              title={this.state.progressbar[3].title}
              percentage={this.state.progressbar[3].percentage}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
