import React from 'react'
import { motion } from 'framer-motion'
import { skills } from './../../api_data/api_skills'
import { AppContainer, MotionContainer } from '../../containers'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import { colors } from '../../assets/colors/colors';
import './Skills.scss'

const Skills = () => {
  const active = useContext(CurrentContext)
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('skills');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#skills-dot');
  

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
    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);

  
  return (
    <div className='skills-section flex nav-section' ref={ref}>
      <h2 className='section-heading'>Skills</h2>
      <div className='skills-container flex'>
        <motion.div className="skills-list flex">

          { skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item flex"
              id={skill.id}
              key={`skill-${skill.name}`}
            >
              <div className="flex" style={{ backgroundColor: colors.skillBg }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}

        </motion.div>

      </div>
      
      
    </div>
  )
}

export default AppContainer(
  MotionContainer(Skills, 'skills'),
   'skills',
   'bg-1'
)