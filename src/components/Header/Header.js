import React from 'react'
import { motion } from 'framer-motion'
import { AppContainer } from '../../containers'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import ParticleBackground from './particleBackground';
import { arrowIcons } from './../../assets/icons/icons_arrows'
import { colors } from '../../assets/colors/colors';
// import ContactIcons from './ContactIcons'
import './Header.scss'


const txtVariants = {
  initial: {
    opacity: 0,
    y: 0
  },
  arrows: {
    opacity: 0,
    y: 80,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },

};



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
      navDots.forEach(dot => dot.style.backgroundColor = colors.navDotInactive);
      dot.style.backgroundColor = colors.homeDotActive;
  
    }
  
    observer.observe(ref.current);
    return () => observer.disconnect();
  
  }, [isIntersecting, active, dot, navDots]);

  return (
    <div className='header flex nav-section' ref={ref}>
      <ParticleBackground />

      <motion.div
        className='header-info'
        initial={{x:-1500}}
        animate={{x:0}}
        transition={{duration: 2}}
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

      <motion.div
      className='arrow-container'
      initial={{x:-1500}}
      animate={{x:0}}
      transition={{duration: 2}}
      >
        <a href='#skills'><motion.img variants={txtVariants} animate="arrows" src={arrowIcons.angles_down} alt="scroll down"/></a>

      </motion.div>
    


     {/* <ContactIcons />*/}
 
    </div>
  )
}

export default AppContainer(Header, 'home')
