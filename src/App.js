import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './components';
import { NavBar } from './components/Nav';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <Skills />
      <Work />
      <About />
      <Footer />
      <Testimonial />
    </div>
  );
}

export default App;