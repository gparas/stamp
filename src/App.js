import React, { Component } from 'react';
import Topbar from './components/topbar/Topbar';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import OurClients from './components/testimonials/OurClients';
import Feature from './components/features/Feature';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      xRay: false
    };
    this.toggleXRay = this.toggleXRay.bind(this);
  }

  toggleXRay(e) {
    e.preventDefault();
    this.setState({xRay: !this.state.xRay});
  }
  render() {
    const {xRay} = this.state;
    return (
      <div className={`${xRay && 'x-ray'}`}>
        <Topbar/>
        <Navbar navbarStyle="navbar-light" xRay={this.toggleXRay}/>
        <Hero/>
        <OurClients/>
        <Feature/>
        <Navbar navbarStyle="navbar-dark bg-dark py-4">
          <button className="btn btn-outline-secondary">Contact</button>
        </Navbar>
      </div>
    );
  }
}

export default App
