import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Button.css';

class Button extends Component {
  render() {
    return (
      <button className={`Button ${this.props.class}`}>
        Get Started
      </button>
    );
  }
}

Button.propTypes = {
  class: PropTypes.string.isRequired
};

export default Button;
