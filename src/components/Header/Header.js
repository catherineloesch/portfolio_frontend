import React from 'react'
import { motion } from 'framer-motion'
import { images} from '../../assets/images';
import { AppContainer } from '../../containers'
import ContactIcons from './ContactIcons'
import './Header.scss'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import ParticleBackground from './particleBackground';
import { arrowIcons } from '../../assets/icons/icons_arrows';


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
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='header-info'
      >

        <div className='header-text flex' >
          <div className='flex header-text-container'>
             <h3 className='p-text greeting'><span>👋🏻</span>Hi, I'm</h3>
             <div className='intro flex'>
                <h1 className='h-text'>Katie</h1>
                <h2 className='p-text flex job-title'>Full-Stack Developer</h2>
                <h3 className='p-text flex job-title'>Freelancer</h3>
             </div>              
          </div>

       

        </div>
      
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className='header-img'
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.avatar}
          alt='avatar'
          className='img-avatar'
        />
       
      </motion.div>
      <ContactIcons />
      <div className='header-down-arrows'>
      hello world
        <img src={arrowIcons.angles_down} alt='down arrows'/>
      </div>
 
    </div>
  )
}

export default AppContainer(Header, 'home')
