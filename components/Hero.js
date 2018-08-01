import React, {Component} from 'react';

const Hero = ({tagline, jobTitle, location}) => (
  <section className="hero full">
    <div className="hero_container">
      <div className="tagline">
        <h1>{tagline}</h1>
      </div>
      <div className="job_title">
        <p>{jobTitle}</p>
      </div>
      <div className="location">
        <p>{location}</p>
      </div>
    </div>
  </section>
);

export default Hero;
