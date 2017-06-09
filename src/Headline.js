import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Headline.css';

class Headline extends Component {
  render() {
    return (
      <header className={`Headline ${this.props.class}`}>
        <h1 className="mx-auto text-white mb-xs">What We Love</h1>
        <p className="text-subheader text-white text-center">
          We are driven by creating experiences that deliver results for <br/> your business and for your consumers
        </p>
      </header>
    );
  }
}

Headline.propTypes = {
  class: PropTypes.string.isRequired
};

export default Headline;
