import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './Navbar';
import Testimonials from './Testimonials';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?inc=name,picture,email')
      .then(res => res.json())
      .then(data => {
        this.setState({ person: data.results })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact={true} path="/" render={() => (
            <h1>Welcome</h1>
          )}/>
          <Route path="/testimonials" render={() => (
            <Testimonials user={this.state.person} />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
