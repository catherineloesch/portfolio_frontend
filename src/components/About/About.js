import React, { useContext, useState, useRef, useEffect } from 'react';

import { CurrentContext } from '../../contexts/CurrentContext';
import { AppContainer, MotionContainer } from '../../containers';
import { SectionHeading, Column } from '../Shared';
import { intros, abouts } from './../../api_data/api_about';
import { aboutImages } from '../../assets/images/about';
import { colors } from '../../assets/colors/colors';
import './About.scss';

const About = () => {
  const active = useContext(CurrentContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('about');

  // select corresponding navlink + navDot, change color when active
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#about-dot');
  // const navBarLinks = document.querySelectorAll('.nav-anchor');
  // const navBarLink = document.querySelector('#about-a');

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
    <div className='about-container'>
      <div className='about-intro flex'>
        <div className='about-intro__avatar-container flex'>
          <img src={aboutImages.avatar2Svg} alt='avatar' />
        </div>

        <div className='about-intro__text-container'>
          <SectionHeading section='about'>About</SectionHeading>
          <div className='about-intro__text flex'>
            {intros.map((intro, index) => (
              <p className='p-text flex' key={`about-intro-${index}`}>
                {intro}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='about-columns-container' ref={ref}>
        {abouts.map((about, index) => (
          <Column
            type='about'
            key={`about-column-${index}`}
            img={about.imgUrl}
            title={about.title}
            txt={about.description}
          />
        ))}
      </div>
      <div className='about-columns-container' ref={ref}>
        {abouts.map((about, index) => (
          <Column
            type='about'
            key={`about-column-${index}`}
            img={about.imgUrl}
            title={about.title}
            txt={about.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AppContainer(MotionContainer(About, 'about'), 'about', 'bg-2');
