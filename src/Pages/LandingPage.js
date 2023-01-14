import React, { Component } from 'react';
import Hero from '../Component/Hero'
import About from '../Component/About';
import Meppsimo from '../Component/Portfolio/Meppsimo'
import Carimotor from '../Component/Portfolio/Carimotor'
import Mi from '../Component/Portfolio/MI'
import Tkit from '../Component/Portfolio/Tkit'
import Istiqomah from '../Component/Portfolio/Istiqomah'
import Todo from '../Component/Portfolio/Todo'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refAbout = React.createRef();
}
 
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Meppsimo />
        <Carimotor />
        <Mi />
        <Tkit />
        <Istiqomah />
        <Todo />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;