import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './Navbar';
// import HappyCustomers from './testimonials/HappyCustomers';
import OurClients from './testimonials/OurClients';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=3&nat=gb,us,es')
      .then(res => res.json())
      .then(data => {
        this.setState({ person: data.results })
      })
  }
  render() {
    const person = this.state.person;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact={true} path="/" render={() => (
            <h1>Welcome</h1>
          )}/>
          <Route path="/testimonials" render={() => (
            <OurClients user={person} />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
