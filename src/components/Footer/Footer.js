import React from 'react'
import { useState, useRef, useEffect, useContext} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { AppContainer, MotionContainer } from '../../containers'
import { socialIcons } from './../../assets/icons/icons_social'
import { BsGithub, BsLinkedin } from'react-icons/bs'
import { MdEmail } from'react-icons/md'
import { FaPaperPlane } from "react-icons/fa";
import { colors } from '../../assets/colors/colors';



import './Footer.scss'

const txtVariants = {
  initial: {
    x: -500,
    opacity: 0,
  }, animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

};

// const slideTxtVariants = {
//   initial: {
//     x: 0,
//   }, animate: {
//     x:"220%",
//     transition: {
//       repeat: Infinity,
//       repeatType: "mirror",
//       duration: 5,
//     },
//   },

// };


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

  function onMouseOverCaptureHandler(e) {
    console.log(e.pageX, e.pageY)
    console.log(e.target.offsetLeft)

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
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
      navDots.forEach(dot => dot.style.backgroundColor = colors.navDotInactive);
      dot.style.backgroundColor = colors.navDotActive;


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
      <motion.h2 className='h-text section-heading' variants={txtVariants} initial="initial" animate="animate">Contact</motion.h2>
      <motion.p className='p-text flex'  variants={txtVariants} initial="initial" animate="animate">Want to leave some feedback for me?<img src={socialIcons.feedback2} alt='feedback'/></motion.p> 
      <motion.p className='p-text flex'  variants={txtVariants} initial="initial" animate="animate"> Or just have a chat? <img src={socialIcons.coffee5} alt='coffee'/> </motion.p>
      <motion.p className='p-text flex'  variants={txtVariants} initial="initial" animate="animate">Leave me a message and I'll be in touch!</motion.p>

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
       {/* <motion.div className='sliding-txt-container' variants={slideTxtVariants} initial="initial" animate="animate">
          Sliding text ???
        </motion.div> */}

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

            <button type='submit' className='btn' id='btn-submit-contact-form' onMouseOverCapture={onMouseOverCaptureHandler}> 
              <span>
                {!loading ? 'Send Message' : 'Sending...'}
                <FaPaperPlane />
              </span>
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
  'bg-1'
)