import React, { Component } from 'react';
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
    return (
      <header className="navbar">
        <a className="navbar-brand">
          <Logo/>
        </a>
        <div className={`navbar-collapse ${toggleMenu ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {navItem()}
          </ul>
        </div>
        <div onClick={this.toggleMenu} className="navbar-text">text</div>
      </header>
    );
  }
}

export default Navbar
