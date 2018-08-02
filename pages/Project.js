import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import {Image, LinkBorder} from '../utilities';
import PageWrapper from '../components/PageWrapper.js';
import {Config} from '../config.js';

class Project extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query;
    const projectRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
    );
    const project = await projectRes.json();
    return {project};
  }

  render() {
    const {project} = this.props;

    return (
      <Layout {...this.props}>
        <section className="page_container">
          <h1>{project.title.rendered}</h1>
          <div className="content_wrapper">
            <div className="content">
              <p>{project.content.rendered}</p>
              <a className="btn" href={project.acf.link} target="_blank">
                Visit Site
                <LinkBorder btnType={'btn_border'} />
              </a>
            </div>
          </div>
          {project.acf.project_images.map((image, index) => (
            <Image
              key={index}
              image={image.url}
              alt={image.alt}
              className="project_image"
            />
          ))}
        </section>
      </Layout>
    );
  }
}
export default PageWrapper(Project);
