import React, { Component } from 'react';
import Navbar from './Navbar';
import Headline from './Headline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Headline class="bg-info" />
      </div>
    );
  }
}

export default App;
