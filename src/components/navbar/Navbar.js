import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const navItem = function () {
  const items = [
    {title: 'Flight',  link: '#' },
    {title: 'Hotels',  link: '#' },
    {title: 'Ferries', link: '#' },
    {title: 'Cars',    link: '#' }
  ];

  return items.map((item, i) =>
    <li key={i} className="nav-item">
      <a href={item.link} className="nav-link">{item.title}</a>
    </li>
  );
};

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({toggleMenu: !this.state.toggleMenu});
  }

  render() {
    const {toggleMenu} = this.state;
    const {xRay, navbarStyle, children} = this.props;
    return (
      <header className={`navbar ${navbarStyle}`}>
        <a className="navbar-brand">
          <Logo className="text-secondary"/>
        </a>
        <div className={`navbar-collapse ${toggleMenu ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {navItem()}
          </ul>
        </div>
        {
          xRay == null ? children :
          <button onClick={xRay} className="btn btn-primary text-small">X - RAY</button>
        }
      </header>
    );
  }
}

Navbar.propTypes = {
  navbarStyle: PropTypes.string
};

export default Navbar
