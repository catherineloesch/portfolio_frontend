import React from 'react'
import { BsGithub, BsLinkedin } from'react-icons/bs'
import { MdOutlineEmail } from'react-icons/md'

const ContactIcons = () => {
  return (
    <div className='contact-icons'>
      <div>
        <a href="https://github.com/katieloesch" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
      </div>
      <div>
        <a href="mailto:katie.loesch@pm.me"><MdOutlineEmail /></a>
      </div>
    </div>
  )
}

export default ContactIcons
