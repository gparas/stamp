import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import HappyCustomers from './components/testimonials/HappyCustomers';
import OurClients from './components/testimonials/OurClients';
import FeatureDji from './components/features/FeatureDji';
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
        <Navbar navbarStyle="navbar-light" xRay={this.toggleXRay}/>
        <HappyCustomers/>
        <OurClients/>
        <FeatureDji/>
        <Navbar navbarStyle="navbar-dark bg-dark py-4">
          <button className="btn btn-outline-primary">Contact</button>
        </Navbar>
      </div>
    );
  }
}

export default App
