import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images} from '../../assets/images';
import { AppContainer } from '../AppContainer';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
          duration: 1,
          ease: 'easeInOut'
        }
  }
}

const Header = () => {
  return (
    <div className='flex header'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='header-info'
      >
        <div className='header-badge'>
          <div className='flex badge-cmp'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hi, I'm</p>
              <h1 className='h-text'>Katie</h1>
            </div>
          </div>
          <div className='flex tag-cmp'>
            <p className='p-text'>Junior Full-Stack Software Engineer</p>
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
      src={images.overlayCircle}
      alt='overlay circle'
      className='overlay-circle'
      />
      <img src={images.avatar} alt='avatar' />
       
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='header-circles'
      >
      {[images.code_solid, images.react_solid, images.dna_solid].map((circle, index) => <div key={`circle-${index}`} className='circle-cmp flex'>
      <img src={circle} alt="circle" />
      </div>)}
      </motion.div>
      
    </div>
  )
}

export default AppContainer(Header, 'home')
