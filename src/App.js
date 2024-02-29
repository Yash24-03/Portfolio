import React from 'react';

// import components
import Header from './componets/Header';
import Hero from './componets/Hero';
import Brands from './componets/Brands';
import About  from './componets/About';
import Skills from './componets/Skills';
import Portfolio from './componets/Portfolio';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Footer from './componets/Footer';

const App = () => {
  return <div>
    <Header/>
    <Hero/>
    <Brands/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    <div style={{height:'2000px'}}></div>
  </div>;
};

export default App;
