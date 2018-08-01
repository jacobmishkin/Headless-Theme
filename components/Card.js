import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config';

const Projects = ({project}) => (

      <section id="project" className="projects">
        <h2>Projects</h2>
        <div className="container project__grid">
          {project.map((post, index) => (
            <div
              className={`project ${post.slug}`}
              key={index}
              style={{backgroundImage: 'url(' + post.acf.image + ')'}}
            >
              <Link
                href={`/Project?slug=${post.slug}&apiRoute=projects`}
                as={`/Project/${post.slug}`}
              >
                <a className="card_link">
                  <h3>{post.title.rendered}</h3>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
export default Projects;