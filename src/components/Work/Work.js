import React, { useState, useEffect } from 'react'
import { useRef, useContext } from 'react'
import { CurrentContext } from '../../contexts/CurrentContext'

import { motion } from 'framer-motion'
import { works } from './../../api_data/api_projects'
import { AppContainer, MotionContainer } from '../../containers'
import { BsEyeFill } from'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import './Work.scss'

// import {ViewportChecker} from '../ViewPortChecker/ViewPortChecker'
// import { urlFor, client } from './../../api'

const Work = () => {


  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [filterWork, setFilterWork] = useState(works)

  const categories = ['All', 'React', 'MERN', 'Rails', 'Full-Stack', 'Web App']
  const active = useContext(CurrentContext)

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('work');
  const navDots = document.querySelectorAll('.nav-dot');
  const dot = document.querySelector('#work-dot');
  console.log(dot)

  useEffect(() => {
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (isIntersecting) {
      console.log('work is intersecting!')
      active.current = 'work'
      console.log(active.current)
      navDots.forEach(dot => dot.style.backgroundColor = '#cbcbcb');
      dot.style.backgroundColor = '#916265';
    }

    observer.observe(ref.current);
    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);

  const handleWorkFilter = (category) => {
    setActiveFilter(category)
    setAnimateCard([{y: 100, opacity: 0}])
    setTimeout(() => {
          setAnimateCard([{y: 0, opacity: 1}])
          if (category === 'All') {
            setFilterWork(works)
          } else {
            setFilterWork(works.filter((work) => work.tags.includes(category)))
          }
        }, 500)
  }

  // const [works, setWorks] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "works"]'

  //   client.fetch(query)
  //   .then((data) => {
  //     setWorks(data)
  //     setFilterWork(data)
  //   })
  // }
  // , [])

  return (
    <div className='works nav-section' ref={ref}>
      <h2 className='h-text'>Projects</h2>
      
      <div className='work-filter'>
        { categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(category)}
            className={`work-filter-item flex p-text ${activeFilter === category ? 'item-active' : ''} `}
          >{category}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren:0.5 }}
        className='work-portfolio'
      >
      {filterWork.map((work, index) => (
        <div className='work-item flex' key={index}>
          <div className='work-img flex'>
            <img src={work.imgUrl} alt={work.title}/>

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition= {{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className='work-hover flex'
            >
              <a href={work.projectLink} target='_blank' rel='noreferrer'>
                <motion.div
                whileInView={{scale: [0, 1]}}
                whileHover={{scale: [1, 0.9]}}
                transition= {{ duration: 0.25}}
                className='flex'
                >
                  <BsEyeFill className='work-icon'/>
                </motion.div>

              </a>
              <a href={work.codeLink} target='_blank' rel='noreferrer'>
                <motion.div
                  whileInView={{scale: [0, 1]}}
                  whileHover={{scale: [1, 0.9]}}
                  transition= {{ duration: 0.25}}
                  className='flex'
                >
                  <AiFillGithub className='work-icon'/>
                </motion.div>

              </a>
            </motion.div>

          </div>
          <div className='work-content flex'>
            <h4 className='bold'>{work.title}</h4>
            <p className='p-text' style={{marginTop: 10}}>{work.description}</p>
          </div>
        
        </div>
      ))}
      </motion.div>
    </div>
  )
}


export default AppContainer(
  MotionContainer(Work, 'work'),
   'work',
   'bg-primary'
)
