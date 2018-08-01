import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import PageWrapper from '../components/PageWrapper.js';
import BlogPost from '../components/BlogPost.js';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config.js';
import {Image} from '../utilities';

class Blog extends Component {

  static async getInitialProps() {
    const blogRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const blogPosts = await blogRes.json();

    return {blogPosts};
  }

  render() {
    const {blogPosts} = this.props;
    return (
      <Layout {...this.props}>
        <section className="blog_index">
          <h1>Blog</h1>
          {blogPosts.map((items, index ) => (
            <BlogPost
              key={index}
              title={items.title.rendered}
              content={items.excerpt.rendered}
              image={items.acf.image}
              link={items.slug}
              date={items.date}
              id={items.id}
              isHomePage={false}
            />
          ))}
        </section>
      </Layout>
    );
  }
}
export default PageWrapper(Blog);
