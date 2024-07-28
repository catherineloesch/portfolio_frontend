import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';

import { CurrentContext } from '../../contexts/CurrentContext';
import { AppContainer, MotionContainer } from '../../containers';
import { BtnFill, Card, Modal, SectionHeading } from '../Shared';
import { projects } from './../../api_data/api_projects';
import { colors } from '../../assets/colors/colors';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(projects);

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeProjectModal = () => {
    setShowProjectModal(false);
  };

  const openProjectModal = (content) => {
    setModalContent(content);
    setShowProjectModal(true);
  };

  const categories = [
    'All',
    'React',
    'MERN',
    'Rails',
    'Full-Stack',
    'Responsive Design',
  ];
  const active = useContext(CurrentContext);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('work');

  // select corresponding navlink + navDot, change color when active
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#work-dot');
  // const navBarLinks = document.querySelectorAll('.nav-anchor');
  // const navBarLink = document.querySelector('#work-a');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-300px' }
    );
    if (isIntersecting) {
      active.current = 'work';
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

  const handleWorkFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (category === 'All') {
        setFilterWork(projects);
      } else {
        setFilterWork(
          projects.filter((project) => project.tags.includes(category))
        );
      }
    }, 500);
  };

  return (
    <React.Fragment>
      <div className='works nav-section' ref={ref}>
        <SectionHeading section='work'>Latest Projects</SectionHeading>

        <div className='work-filter'>
          {categories.map((category, index) => (
            <BtnFill
              type='button'
              name={category}
              key={`work-filter-${category}`}
              id={`work-filter-${category}`}
              size='small'
              active={activeFilter}
              classNames='work-filter-item'
              onClick={() => handleWorkFilter(category)}
            >
              {category}
            </BtnFill>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='work-portfolio'
        >
          {/* {filterWork.map((project, index) => (
            <div className="work-item flex" key={index}>
              <div className="work-img flex">
                <img src={project.imgArr[0].src} alt={project.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="work-hover flex"
                >
                  <button
                    onClick={() => openProjectModal(project)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="flex"
                    >
                      <BsEyeFill className="work-icon" />
                    </motion.div>
                  </button>
                </motion.div>
              </div>
              <div className="work-content flex">
                <h4 className="bold">{project.title}</h4>
              </div>
            </div>
          ))} */}

          {filterWork.map((project, index) => (
            <Card
              type='project'
              key={`project-card-${index}`}
              img={project.imgArr[0].src}
              alt={project.imgArr[0].title}
              txt={project.title}
              imgEffects=''
              overlayEffects='blur slide-up'
              onClick={() => openProjectModal(project)}
            />
          ))}
        </motion.div>
      </div>
      <Modal
        type='project-modal'
        data={modalContent}
        show={showProjectModal}
        onCancel={closeProjectModal}
        closeModal={closeProjectModal}
      />
    </React.Fragment>
  );
};

export default AppContainer(MotionContainer(Work, 'work'), 'work', 'bg-2');
