import React, {Component, Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Menu from './Menu.js';
import {Logo} from '../utilities';
import {Config} from '../config.js';
import stylesheet from '../src/styles/style.scss';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Head>
          <style dangerouslySetInnerHTML={{__html: stylesheet}} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Jacob Mishkin | Portfolio</title>
        </Head>
        <header className="site_header">
          <div className="header_wrapper">
            <div className="logo_wrapper">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </div>
            <Menu menu={this.props.mainNav} />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
