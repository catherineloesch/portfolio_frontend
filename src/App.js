import React from 'react';
import { About, Footer, Header, Skills, Work } from './components';
import { NavBar, NavDots } from './components/Nav';
import './App.scss'
// import ContactIcons from './ContactIcons';

const App = () => {

  return (
    <div className='app'>
      <NavBar />
      <Header />
      <Skills />
      <Work />
      <About />
      <Footer />
      <NavDots  active={''} />

    </div>
  );
}

export default App;