import React, { Component } from 'react';
import navigationLinks from 'src/configs/navigationLinks';
import Navigation from '../Navigation';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo" />
        <input type="checkbox" id="menu-checkbox" />
        <nav role="navigation">
          <Navigation navigationLinks={navigationLinks} />
        </nav>
      </div>
    );
  }
}

export default Header;
