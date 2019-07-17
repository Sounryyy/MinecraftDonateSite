import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavigationLink extends Component {
  render() {
    const { attributes, text } = this.props;
    return (
      <li>
        <a {...attributes}>{text}</a>
      </li>
    );
  }
}

NavigationLink.propTypes = {
  attributes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default NavigationLink;
