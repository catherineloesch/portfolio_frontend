import React from 'react'
import { motion } from 'framer-motion'
import { images} from '../../assets/images';
import { AppContainer } from '../../containers'
import './Header.scss'

const circleImages = [images.code_solid, images.react_solid, images.dna_solid]

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='header flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='header-info'
      >

        <div className='header-text flex' style={{ marginLeft: 20 }}>

          <div className='flex header-text-container'>
         
             <p className='p-text greeting'><span>👋🏻</span>Hi, I'm</p>
             <div className='intro flex'>
                <h1 className='h-text'>Katie</h1>
                <p className='p-text flex job-title'>Full-Stack Developer</p>
             </div>
              
       

          </div>

       

        </div>
      
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className='header-img'
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.avatar}
          alt='avatar'
          className='img-avatar'
        />
       
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='header-circles'
      >
        { circleImages.map((circle, index) => (
          <div key={`circle-${index}`} className='circle-cmp flex'>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
      
    </div>
  )
}

export default AppContainer(Header, 'home')
