import React, {Component, Fragment} from 'react';

import Link from 'next/link';
import ResponsiveMenu from './ResponsiveMenu.js';
import {BurgerIcon, CloseButton, LinkBorder} from '../utilities';
import {Config} from '../config.js';
import LinkSmoothScroll from './LinkSmoothScroll.js';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    console.log('is working');
    this.setState({menuOpen: false});
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen});
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }
  getSlug(url) {
    const parts = url.split('/');
    return parts.length > 2 ? parts[parts.length - 2] : '';
  }

  render() {
    const menuItems = this.props.menu.items.map((item, index) => {
      if (item.object === 'custom') {
        return (
          <li key={item.ID}>
            <LinkSmoothScroll href={item.url}>
              <a>
                {item.title}
                <LinkBorder btnType="navBtn" />
              </a>
            </LinkSmoothScroll>
          </li>
        );
      }
      const slug = this.getSlug(item.url);
      const actualPage = item.object === 'category' ? 'category' : 'post';
      return (
        <li key={item.ID}>
          <LinkSmoothScroll href={item.url}>
            <Link
              as={`/${item.object}/${slug}`}
              href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
            >
              <a>
                {item.title}
                <LinkBorder btnType="navBtn" />
              </a>
            </Link>
          </LinkSmoothScroll>
        </li>
      );
    });

    return (
      <ResponsiveMenu
        primaryNavigationClassName="primary_navigation"
        mobileNavigationClassName="mobile_navigation"
        primary_menuClassName="desktop_menu"
        mobile_menuClassName="mobile_menu"
        menu={menuItems}
      />
    );
  }
}

export default Menu;
