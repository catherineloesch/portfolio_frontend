import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './components';
import { NavBar } from './components/Nav';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;