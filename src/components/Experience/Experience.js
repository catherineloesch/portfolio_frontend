import React from 'react'
import { motion } from 'framer-motion'
import { experience } from './../../api_data/api_experience'
import { AppContainer, MotionContainer } from '../../containers'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import './Experience.scss'


const Experience = () => {
  const active = useContext(CurrentContext)
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('experience');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#experience-dot');
  

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
    <div className='experience flex nav-section' ref={ref}>
      <h2 className='h-text'>Experience</h2>
      <div className='experience-container flex'>

        <motion.div className='experience'>
          { experience.map((period) => (
            <motion.div
              className='experience-item'
              key={`year-${period.year}`}
            >
              <div className='experience-year'>
                <p className='bold'>{period.year}</p>
              </div>

              <motion.div className='experience-works'>
                {period.exp.map((work) => (
                  <div key={`project-${work.name}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="experience-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                      <p className='p-text desc'>{work.description}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

            </motion.div>
          ))}
            
        </motion.div>
      </div>
      
    </div>
  )
}

export default AppContainer(
  MotionContainer(Experience, 'experience'),
   'experience',
   'bg-white'
)