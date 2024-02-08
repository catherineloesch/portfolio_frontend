import React, { useContext } from 'react'
import { motion, useInView } from 'framer-motion'
import { AppContainer, MotionContainer } from '../../containers'
import { useState, useRef, useEffect} from "react"; 
import { CurrentContext } from '../../contexts/CurrentContext'
import { colors } from '../../assets/colors/colors'
import { media } from '../../api_data/api_about_media';

import './AboutMedia.scss'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const AboutMedia = () => {
  const active = useContext(CurrentContext)

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('about-media');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#about-dot');

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
    console.log('issue?????????', ref.current)

    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);

  const isInView = useInView(ref, {margin: "-100px"})



  return (
    <motion.div className='about-media-container' ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
        <motion.div className='text-container' variants={variants}>
            <p>
                Do or do not.
                <br/> 
                There is no try.
            </p>
            <hr />
        </motion.div>

        <motion.div className='title-container' variants={variants}>
            <div className='title'>
                <img src={require('./../../assets/images/duckdna.jpg')}/>
                <h1>
                    <span>Unique</span> Ideas
                </h1>
            </div>
            <div className='title'>
                <h1>
                    <span>For your</span> Website
                </h1>
                <button>What we do ?</button>
            </div>
        </motion.div>

        <motion.div className='list-container' variants={variants}>

            {media.map((m, index) => {
                return (
                    <div
                        className='box'
                        key={'box-${index}'}
                        
                    >
                        <h2>{m.name}</h2>
                        <p>
                            Some interesting shit I'm interested in.
                        </p>
                        <button>Go</button>
                    </div>
                )
            })}
           
        </motion.div>
     

    </motion.div>
  )
}

export default AppContainer(
  MotionContainer(AboutMedia, 'about-media'),
   'about-media',
   'bg-2'
)
