import React from 'react'
import { BsGithub} from'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
// import { MdOutlineEmail } from'react-icons/md'
import { VscMail } from'react-icons/vsc'

const ContactIcons = () => {
  return (
    <div className='contact-icons'>
      <div className='contact-icon-linkedin'>
       <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
      </div>
      <div  className='contact-icon-github'>
        <a href="https://github.com/katieloesch" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      </div>
      <div>
        <a href="mailto:katie.loesch@pm.me" className='contact-icon-mail'><VscMail/></a>
      </div>
    </div>
  )
}

export default ContactIcons
