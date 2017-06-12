import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Button from './Button';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-header">
          <Link className="Navbar-brand text-title" to="/">Stamp</Link>
        </div>
        <ul className="Navbar-nav ml-auto">
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><a href="">Integrations</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
        <Button class="ml-auto"/>
      </div>
    );
  }
}

export default Navbar;
