import React, {Component} from 'react';
import Layout from './Layout';
import {Image} from '../utilities';
import Skills from './Skills.js';

const About = ({title, content, image}) => (
  <section id="about" className="about_me">
    <h2>{title}</h2>
    <div className="about_container">
      <Image className="bio_image" image={image} alt="Photo Of Jacob Mishkin" />
      <div className="about_content">
        <p>{content}</p>
        <Skills />
      </div>
    </div>
  </section>
);

export default About;
