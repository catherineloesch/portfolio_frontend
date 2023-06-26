import React from 'react'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import { AppContainer, MotionContainer } from '../../containers'
import { socialIcons } from './../../assets/icons/icons_social'
import { BsGithub, BsLinkedin } from'react-icons/bs'
import { MdEmail } from'react-icons/md'
import { FaPaperPlane } from "react-icons/fa";
import './Footer.scss'
import emailjs from '@emailjs/browser';


const Footer = () => {
  const form = useRef();
  //EmailJS parameters
    //emails sent to 'katie.loesch@pm.me'
  const publicKey = 'zNvzRNVUztWrUC40f'
  const serviceId = 'service_gaq8s1d'
  const templateId = 'template_4np1zu1'
    //initialise emailjs with public key
  emailjs.init(publicKey)

  const formTemplate = {
    name: '',
    email: '',
    message: ''
  }


  const [formData, setFormData] = useState(formTemplate)

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const active = useContext(CurrentContext)
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('contact');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#contact-dot');

  useEffect(() => {
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (isIntersecting) {
      active.current = 'about'
      navDots.forEach(dot => dot.style.backgroundColor = '#cbcbcb');
      dot.style.backgroundColor = '#916265';


    }

    observer.observe(ref.current);
    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then((res)=> {
      console.log(res.text)
      setLoading(false)
      setFormSubmitted(true)
      setFormData(formTemplate)

    })
    .catch((err) => {
      alert('Something went wrong, please try again later!') 
    console.log(err.text)}); //msg: something went wrong

  }

  return (
    <>
      <h2 className='h-text'>Contact</h2>
      <p className='p-text flex'>Want to leave some feedback for me?<img src={socialIcons.feedback2} alt='feedback'/></p> 
      <p className='p-text flex'> Or just have a chat? <img src={socialIcons.coffee5} alt='coffee'/> </p>
      <p className='p-text flex'>Leave me a message and I'll be in touch!</p>

      <div className='footer-socials nav-section' ref={ref} >

        <div className='footer-social-icon mail-icon'>
          <a href="mailto:katie.loesch@pm.me" className='p-text'>
            <MdEmail />
          </a>
        </div>
    
        <div className='footer-social-icon github-icon'>
          <a href="https://github.com/katieloesch" target="_blank" rel="noopener noreferrer" className='p-text'>
            <BsGithub />
          </a>
        </div>

        <div className='footer-social-icon linkedin-icon'>
            <a href="https://www.linkedin.com/in/katie-loesch/" target="_blank" rel="noopener noreferrer" className='p-text'>
              <BsLinkedin />
            </a>
        </div>

      </div>

      {!formSubmitted  ? (
        <form className='footer-form flex' ref={form} onSubmit={handleFormSubmit}>

            <div className='flex'>
              <input className='p-text' name='name' type='text' placeholder='name' value={formData.name} onChange={handleFormChange} autoComplete='off'/>
            </div>

            <div className='flex'>
              <input className='p-text' name='email' type='email' placeholder='email' value={formData.email} onChange={handleFormChange} autoComplete='off' required/>
            </div>

            <div>
              <textarea
                className='p-text'
                name='message'
                placeholder='message'
                value={formData.message}
                onChange={handleFormChange}
                autoComplete='off'
                required
              />
            </div>

            <button type='submit' className='p-text'> 
              {!loading ? 'Send Message' : 'Sending...'}
              <FaPaperPlane />
            </button>

          </form>
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