import React, { useState } from 'react'
import { AppContainer, MotionContainer } from '../../containers'
import { client } from './../../api'
import { socialIcons } from './../../assets/icons/icons_social'
import { BsGithub, BsLinkedin } from'react-icons/bs'
import { MdEmail } from'react-icons/md'
import { FaPaperPlane } from "react-icons/fa";
import './Footer.scss'


const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    setLoading(true)

    const submission = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    // sendind data to sanity API
    client.create(submission)
    .then(() => {
      setLoading(false)
      setFormSubmitted(true)
    })
    .catch((err) => console.log(err));

  }

  return (
    <>
      <h2 className='h-text'>Keep in touch!</h2>
      <p className='p-text flex'>Want to leave some feedback for me?<img src={socialIcons.feedback2} alt='feedback'/></p> 
      <p className='p-text flex'> Or just have a chat? <img src={socialIcons.coffee5} alt='coffee'/> </p>
      <p className='p-text flex'>Send me a message and I'll get back to you shortly.</p>

      <div className='footer-socials'>

        <div className='footer-social-icon'>
          <a href="mailto:katie.loesch@pm.me" className='p-text'>
            <MdEmail />
          </a>
        </div>
    
        <div className='footer-social-icon'>
          <a href="https://github.com/katieloesch" target="_blank" rel="noopener noreferrer" className='p-text'>
            <BsGithub />
          </a>
        </div>

        <div className='footer-social-icon'>
            <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" className='p-text'>
              <BsLinkedin />
            </a>
        </div>

      </div>

      {!formSubmitted  ? (
        <div className='footer-form flex'>

            <div className='flex'>
              <input className='p-text' name='name' type='text' placeholder='name' value={formData.name} onChange={handleFormChange} autoComplete='off'/>
            </div>

            <div className='flex'>
              <input className='p-text' name='email' type='email' placeholder='email' value={formData.email} onChange={handleFormChange} autoComplete='off'/>
            </div>

            <div>
              <textarea
                className='p-text'
                name='message'
                placeholder='message'
                value={formData.message}
                onChange={handleFormChange}
                autoComplete='off'
              />
            </div>

            <button type='button' className='p-text' onClick={handleFormSubmit}> 
              {!loading ? 'Send Message' : 'Sending...'}
              <FaPaperPlane />
            </button>

          </div>
    ) : ( 
        <div>
          <h3 className='h-text'>
            Thanks for getting in touch!
          </h3>
        </div>
    )}
    </>
  )
}

export default AppContainer(
  MotionContainer(Footer, 'footer'),
  'contact',
  'bg-white'
)