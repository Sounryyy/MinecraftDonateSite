import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'reshadow';
import styles from './NavigationLink.shadow.css';

class NavigationLink extends Component {
  static propTypes = {
    attributes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['white', 'black'])
  };

  static defaultProps = {
    color: 'white'
  };

  render() {
    const { attributes, text, color } = this.props;
    return styled(styles)(
      <li className="navigation-link">
        <a {...attributes}>{text}</a>
      </li>
    );
  }
}

export default NavigationLink;
