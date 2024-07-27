import React from 'react';
import { useState, useRef, useEffect, useContext } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { AppContainer, MotionContainer } from '../../containers';
import { SectionHeading } from '../Shared';
import { timelineData } from '../../api_data/api_timeline';
import { CurrentContext } from '../../contexts/CurrentContext';
import { colors } from '../../assets/colors/colors';
import './Experience.scss';

const Experience = () => {
  const active = useContext(CurrentContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('experience');
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#experience-dot');

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
      dot.style.backgroundColor = colors.navDotActive;
    }

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting, active, dot, navDots]);

  return (
    <div className='experiences flex nav-section' ref={ref}>
      <SectionHeading section='experience'>
        Experience & Education
      </SectionHeading>
      <div className='timeline'>
        <VerticalTimeline className='timeline-container'>
          {timelineData.map((timelineItem, index) => (
            <VerticalTimelineElement
              key={`tl-${timelineItem.id}`}
              date={timelineItem.date}
              dateClassName='timeline-date'
              iconStyle={timelineItem.style}
              icon={
                <img
                  src={timelineItem.img}
                  alt={`${timelineItem.title} logo`}
                  className='timeline-img'
                  id={`timeline-img-${index}`}
                />
              }
              contentStyle={{ background: 'transparent' }}
            >
              <h3 className='vertical-timeline-element-title'>
                {timelineItem.title}
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                {timelineItem.company}
              </h4>
              <ul className='timeline-item-description' id='description'>
                {timelineItem.description.map((descriptionItem, index) => (
                  <li
                    key={`timeline-description-item-${timelineItem.id}-${index}`}
                  >
                    {descriptionItem}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AppContainer(
  MotionContainer(Experience, 'experience'),
  'experience',
  'bg-1'
);
