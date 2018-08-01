import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config.js';

export default class Skills extends Component {
  state = {
    skill: [],
  };

  async componentDidMount() {
    const skillRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/tags/?per_page=15&order=desc`
    );
    const skill = await skillRes.json();
    this.setState({
      skill,
    });
  }
  render() {
    const {skill} = this.state;

    return (
      <section className="skills">
        {skill.map((skills, index) => (
          <span className="skill" key={index}>
            {skills.name}
          </span>
        ))}
      </section>
    );
  }
}
