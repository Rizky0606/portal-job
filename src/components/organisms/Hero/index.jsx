import React from "react";
import FormJob from "../FormJob";
import "./style.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="section-1">
        <div className="wording">
          <div className="title">
            Discover <br /> more than <br /> <span>5000+ Jobs</span>
          </div>
          <img src="/images/accent.png" alt="Accent" />
          <div className="descriptiton">
            Great platform for the job seeker that searching for <br /> new
            career heights and passionate about startups
          </div>
          <FormJob />
        </div>
      </div>
      <div className="section-2">
        <img src="/images/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
