import React from 'react'
import { BsGithub} from'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
// import { MdOutlineEmail } from'react-icons/md'
import { VscMail } from'react-icons/vsc'

const ContactIcons = () => {
  return (
    <div className='contact-icons'>
      <div>
        <a href="https://github.com/katieloesch" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      </div>
      <div>
        <a href="mailto:katie.loesch@pm.me"><VscMail/></a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
      </div>
    </div>
  )
}

export default ContactIcons
