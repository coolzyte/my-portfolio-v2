import React, { Component } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

class SkillBar extends Component {
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
      <div className="ProgressBar">
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
    );
  }
}

export default SkillBar;
