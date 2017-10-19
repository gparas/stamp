import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import HappyCustomers from './components/testimonials/HappyCustomers';
import OurClients from './components/testimonials/OurClients';
import FeatureDji from './components/features/FeatureDji';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <HappyCustomers/>
        <OurClients/>
        <FeatureDji/>
      </div>
    );
  }
}

export default App
