import React from 'react'
import { BsGithub} from'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { VscMail } from'react-icons/vsc'
import { motion } from 'framer-motion';

const ContactIcons = () => {
  return (
    <motion.div 
    className='contact-icons'
    initial={{x:-1500}}
    animate={{x:0}}
    transition={{duration: 2}}
    >
      <div className='contact-icon-linkedin'>
       <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
      </div>
      <div  className='contact-icon-github'>
        <a href="https://github.com/katieloesch" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      </div>
      <div>
        <a href="mailto:katie.loesch@pm.me" className='contact-icon-mail'><VscMail/></a>
      </div>
    </motion.div>
  )
}

export default ContactIcons
