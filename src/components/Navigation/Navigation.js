import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavigationLink from '../NavigationLink';

class Navigation extends Component {
  render() {
    const { navigationLinks } = this.props;
    return (
      <ul>
        {navigationLinks.map(item => (
          <NavigationLink key={item.attributes.id} {...item} />
        ))}
      </ul>
    );
  }
}

Navigation.propTypes = {
  navigationLinks: PropTypes.array.isRequired
};

export default Navigation;
