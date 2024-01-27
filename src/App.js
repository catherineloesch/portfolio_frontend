import React, { useRef } from 'react';
import { About, Footer, Header, Skills, Work } from './components';
import { NavBar, NavDots, NavMobile } from './components/Nav';

// import MobileNav from './components/Nav/MobileNav';
import { CurrentContext } from './contexts/CurrentContext';

import './App.scss'
import Experience from './components/Experience/Experience';

const App = () => {

  const active = useRef('home');
  // const [menuToggle, setMenuToggle] = useState(false)


  return (
    <div className='app' >
      <CurrentContext.Provider value={{active}} >
      
        <NavBar />
        <NavMobile />

        <Header />        
        <Skills />
        <Work />
        <Experience />
        <About />
        <Footer />
        <NavDots />
      
      </CurrentContext.Provider>
    </div>
  );
}

export default App;