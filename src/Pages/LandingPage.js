import React, { Component } from 'react';
import Hero from '../Component/Hero'
import About from '../Component/About';

class LandingPage extends Component {
 
  render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default LandingPage;