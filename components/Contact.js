import React, {Component} from 'react';
import {Image, SocialIcons, Button} from '../utilities';

const Contact = ({image, tagline, jobTitle}) => (
  <section id="connect" className="contact">
    <h2>Let's Connect</h2>
    <div className="contact_wrapper">
      <Image className="contact_image" image={image} alt="Chicago" />
      <h3>{tagline}</h3>
      <h4>{jobTitle}</h4>
      <Button href={`mailto:jacob@jacobmishkin.com`} text="Contact Me" />
      <SocialIcons />
    </div>
  </section>
);

export default Contact;
