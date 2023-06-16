import React from 'react'
import { BsGithub, BsLinkedin } from'react-icons/bs'
import { MdOutlineEmail } from'react-icons/md'


const ContactIcons = () => {
  return (
    <div className='contact-icons'>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <MdOutlineEmail />
      </div>
    </div>
  )
}

export default ContactIcons
