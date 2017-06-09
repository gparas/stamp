import React, { Component } from 'react';
import Button from './Button';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-header">
          <a className="Navbar-brand text-title" href="/">Stamp</a>
        </div>
        <ul className="Navbar-nav ml-auto">
          <li><a href="">About</a></li>
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
