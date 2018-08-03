import React, {Component} from 'react';
import Menu from 'react-burger-menu/lib/menus/stack';

class ResponsiveMenu extends Component {
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
