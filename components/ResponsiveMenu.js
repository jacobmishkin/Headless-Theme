import React, {Component} from 'react';
import Menu from 'react-burger-menu/lib/menus/stack';

class ResponsiveMenu extends Component {
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

  render() {
    const {
      menu,
      primaryNavigationClassName,
      mobileNavigationClassName,
      primary_menuClassName,
      mobile_menuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton,
    } = this.props;
    return (
      <div className="nav_container">
        <nav className={primaryNavigationClassName}>
          <ul className={primary_menuClassName}>{menu}</ul>
        </nav>
        <nav className={mobileNavigationClassName}>
          <Menu right>
            {menu}
          </Menu>
        </nav>
      </div>
    );
  }
}

ResponsiveMenu.defaultProps = {
  primaryNavigationClassName: '',
  mobileNavigationClassName: '',
  primary_menuClassName: '',
  mobile_menuClassName: '',
};
export default ResponsiveMenu;
