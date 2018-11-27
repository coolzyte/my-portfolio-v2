import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";

const Testimonial = ({ testimonialsContent }) => {
  return (
    <section className="testimonials">
      <div className="swiper-container p-tb">
        <div className="bg bgImage overlay" />
        <div className="swiper-wrapper">
          {testimonialsContent.map((user, i) => {
            return (
              <TestimonialCard
                key={i}
                id={testimonialsContent[i].id}
                name={testimonialsContent[i].name}
                sub={testimonialsContent[i].sub}
                desc={testimonialsContent[i].desc}
                pic={testimonialsContent[i].pic}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
