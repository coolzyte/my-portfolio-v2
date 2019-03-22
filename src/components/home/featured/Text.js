import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import { Animate } from "react-move";

import FeaturedPic from "../../../assets/images/mac.png";

class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, ease: easePolyOut }
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(260px,270px) rotateY(${rotate}deg)`
            }}
          >
            Cz
          </div>
        );
      }}
    </Animate>
  );

  animateTitle = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 450
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [450],
        timing: { duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_title"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`
            }}
          >
            Creative
          </div>
        );
      }}
    </Animate>
  );

  animateSub = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 586
      }}
      enter={{
        opacity: [1],
        x: [273],
        y: [586],
        timing: { delay: 300, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_title"
            style={{
              opacity,
              transform: `translate(${x}px,${y}px)`
            }}
          >
            Studio
          </div>
        );
      }}
    </Animate>
  );
  animatePic = () => (
    <Animate
      show={true}
      start={{
        opacity: 0
      }}
      enter={{
        opacity: [1],

        timing: { delay: 800, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity }) => {
        return (
          <div
            className="featured_pic"
            style={{
              opacity,
              background: `url(${FeaturedPic})`,
              transform: `translate(550px,288px)`
            }}
          />
        );
      }}
    </Animate>
  );
  render() {
    return (
      <div className="featured_text">
        {this.animatePic()}
        {this.animateNumber()}
        {this.animateTitle()}
        {this.animateSub()}
      </div>
    );
  }
}
export default Text;
