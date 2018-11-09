import React, { Component } from 'react';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper.js';
import { Config } from '../config.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Hero from '../components/Hero.js';
import Card from '../components/Card.js';
import BlogPost from '../components/BlogPost.js';

class Index extends Component {
  static async getInitialProps(context) {
    const aboutRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=about`
    );
    const about = await aboutRes.json();
    const contactRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=connect`
    );
    const contact = await contactRes.json();
    const blogRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?per_page=1`
    );
    const blog = await blogRes.json();

    const projectRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/projects`);
    const project = await projectRes.json();

    return { about, contact, blog, project };
  }

  render() {
    const { about, contact, blog, project } = this.props;

    return (
      <Layout {...this.props}>
        <Hero
          tagline="Jacob Mishkin"
          jobTitle="Frontend Developer"
          location="Based in Chicago"
        />
        <Card project={project} />
        <About
          title={about.title.rendered}
          content={about.content.rendered}
          image={about.acf.image}
        />
        {blog.map((items, index) => (
          <BlogPost
            key={index}
            header="Latest Blog Post"
            title={items.title.rendered}
            content={items.excerpt.rendered}
            image={items.acf.image}
            link={items.slug}
            date={items.date}
            id={items.id}
            isHomePage={true}
          />
        ))}
        <Contact
          image={contact.acf.image}
          tagline="Jacob Mishkin"
          jobTitle="Frontend Developer"
        />
      </Layout>
    );
  }
}

export default PageWrapper(Index);
