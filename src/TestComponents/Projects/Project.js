import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Project = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className='project'>
      <div className='details-container'>
        <div className='details-wrapper' ref={ref}>

          <motion.div className='details-img-container' style={{y}}>
            <img src={item.imgUrl} alt='screen shot for project: ${item.title}'/>
          </motion.div>

          <motion.div className='details-text-container' style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        
        </div>
     
      </div>

    </section>
  )
}

export default Project
