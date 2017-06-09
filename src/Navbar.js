import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-header">
          <a className="Navbar-brand" href="/">Logo</a>
        </div>
        <ul className="Navbar-nav mx-auto">
          <li><a href="">About</a></li>
          <li><a href="">Integrations</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
