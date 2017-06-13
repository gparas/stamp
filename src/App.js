import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './Navbar';
import Testimonials from './Testimonials';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact={true} path="/" render={() => (
            <h1>Welcome</h1>
          )}/>
          <Route path="/testimonials" component={Testimonials}/>
        </div>
      </Router>
    );
  }
}

export default App;
