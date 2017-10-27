import React, { Component } from 'react';

import heroImg from './hero.jpg';

class Hero extends Component {
  render() {
    const bgImage = {
      backgroundImage: `url(${heroImg})`,
      opacity: 0.5
    };
    return (
      <section className="section py-5 bg-dark">
        <div className="bg-image" style={bgImage}></div>
        <div className="page-width text-center">
          <h1 className="text-white">Happy Customers</h1>
          <p className="text-lead text-white mb-lg">
            Co-ordinate campaigns and product launches, with improved overall communication.
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </section>
    );
  }
}

export default Hero
