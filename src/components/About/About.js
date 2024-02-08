import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContainer, MotionContainer } from '../../containers'
import { intros, abouts } from './../../api_data/api_about'
import { aboutImages } from '../../assets/images/about'
import { useState, useRef, useEffect} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import { colors } from '../../assets/colors/colors'

import './About.scss'


const About = () => {
  const active = useContext(CurrentContext)

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('about');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#about-dot');

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
      dot.style.backgroundColor = colors.navDotActive;

    }

    observer.observe(ref.current);
    console.log('issue?????????', ref.current)

    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);


  return (
    <div className='about-container'>
     
      <motion.div className='about-intro flex'>
        <div className='flex about-avatar'><img src={aboutImages.avatar} alt='avatar'/></div>
        <div className='about-introduction'>
          <h2 className='h-text section-heading'>About</h2>
          <div className='about-intro-text flex'>
            {intros.map((intro, index) => (<p className='p-text flex' key={`about-intro-${index}`}>{intro}</p>))}
          </div>
        </div>
        
      </motion.div>
    
      <div className='profile' ref={ref}>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1}}
          transition={{duration: 0.5, type:'tween'}}
          className='profile-item'
          key={'about-'+index}
          >
          
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 20}}>{about.description}</p>

          </motion.div>
        ))}
      </div> 

    </div>
  )
}

export default AppContainer(
  MotionContainer(About, 'about'),
   'about',
   'bg-2'
)
