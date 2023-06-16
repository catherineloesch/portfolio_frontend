import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { works } from './../../api_data/api_projects'
import { AppContainer } from '../AppContainer'
import { BsEyeFill } from'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import './Work.scss'
// import { urlFor, client } from './../../api'

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [filterWork, setFilterWork] = useState(works)

  const categories = ['All', 'React', 'MERN', 'Rails', 'Full-Stack', 'Web App']

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
    <div className='works'>
      <h2 className='h-text'>Projects</h2>
      <div className='work-filter'>
      {categories.map((category, index) => (
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
      transition={{duration: 0.5, delayChildren:0.5}}
      className='work-portfolio'
      >
      {filterWork.map((work, index) => (
        <div className='work-item flex' key={index}>
          <div className='work-img flex'>
            <img src={work.imgUrl} alt={work.title}/>

            <motion.div
            whileHover={{opacity: [0, 1]}}
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

export default AppContainer(Work, 'work')
