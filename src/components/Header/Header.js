import React from 'react'
import { motion } from 'framer-motion'
import { AppContainer } from '../../containers'
import ContactIcons from './ContactIcons'
import './Header.scss'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import ParticleBackground from './particleBackground';

const Header = () => {
  const active = useContext(CurrentContext)
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('home');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#home-dot');



  useEffect(() => {
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (isIntersecting) {
      active.current = 'about'
      navDots.forEach(dot => dot.style.backgroundColor = '#cbcbcb');
      dot.style.backgroundColor = '#916265';
  
    }
  
    observer.observe(ref.current);
    return () => observer.disconnect();
  
  }, [isIntersecting, active, dot, navDots]);

  return (
    <div className='header flex nav-section' ref={ref}>
      <ParticleBackground />

      <motion.div
      
        className='header-info'
      >

        <div className='header-text flex' >
          <div className='flex header-text-container'>
             <h3 className='p-text greeting'>Hi there! I'm</h3>
             <div className='intro flex'>
                <h1 className='header-name'>
                <span aria-hidden="true">Katie Loesch</span>
                Katie Loesch
                <span aria-hidden="true">Katie Loesch</span>
                </h1>

                <h2 className='p-text flex job-title'>Full-Stack Developer</h2>
             </div>
          </div>

       

        </div>
      
      </motion.div>

      <ContactIcons />
 
    </div>
  )
}

export default AppContainer(Header, 'home')
