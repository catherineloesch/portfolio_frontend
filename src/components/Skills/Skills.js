import React from 'react';
import { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import { skills } from './../../api_data/api_skills';
import { CurrentContext } from '../../contexts/CurrentContext';
import { AppContainer, MotionContainer } from '../../containers';
import { SectionHeading } from '../Shared';
import { colors } from '../../assets/colors/colors';
import './Skills.scss';

const Skills = () => {
  const active = useContext(CurrentContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('skills');

  // select corresponding navlink + navDot, change color when active
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#skills-dot');
  // const navBarLinks = document.querySelectorAll('.nav-anchor');
  // const navBarLink = document.querySelector('#skills-a');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-300px' }
    );
    if (isIntersecting) {
      active.current = 'about';
      navDots.forEach(
        (dot) => (dot.style.backgroundColor = colors.navDotInactive)
      );

      // navBarLinks.forEach(
      //   (link) => (link.style.color = colors.navLinkInactive)
      // );
      dot.style.backgroundColor = colors.navDotActive;
      // navBarLink.style.color = colors.navLinkActive;
    }

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting, active, dot, navDots]);

  return (
    <div className='skills-section flex nav-section' ref={ref}>
      <SectionHeading section='skills'>Technologies</SectionHeading>
      <div className='skills-container flex'>
        <motion.div className='skills-list flex'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='skills-item flex'
              id={skill.id}
              key={`skill-${skill.name}`}
            >
              <div className='flex' style={{ backgroundColor: colors.skillBg }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppContainer(
  MotionContainer(Skills, 'skills'),
  'skills',
  'bg-1'
);
