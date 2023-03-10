import React, { Component } from 'react';
import Header from '../Component/Header';
import Hero from '../Component/Hero'
import About from '../Component/About';
import Meppsimo from '../Component/Portfolio/Meppsimo'
import BurgerEnak from '../Component/Portfolio/BurgerEnak'
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
      <div className="App">
        <Header/>
        <Hero />
        <About />
        <Meppsimo />
        <BurgerEnak />
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