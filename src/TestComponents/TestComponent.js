import React, { useContext } from 'react'

import { AppContainer, MotionContainer } from '../containers'

import { useState, useRef, useEffect} from "react"; 
import { CurrentContext } from '../contexts/CurrentContext'
import { colors } from '../assets/colors/colors'

// import { urlFor, client } from './../../api'



const TestComponent = () => {
  const active = useContext(CurrentContext)

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef('test');
  const navDots = document.querySelectorAll('.nav-dot')
  const dot = document.querySelector('#test');

  useEffect(() => {
   
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (isIntersecting) {
      active.current = 'text'
      navDots.forEach(dot => dot.style.backgroundColor = colors.navDotInactive);
      dot.style.backgroundColor = colors.navDotActive;

    }

    observer.observe(ref.current);
    console.log('CURRRRENT???!!!!!, ', ref.current)
    return () => observer.disconnect();

  }, [isIntersecting, active, dot, navDots]);
  
  // const [abouts, setAbouts] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]'

  //   client.fetch(query)
  //   .then((data) => setAbouts(data))
  //   }, [])

  // const isVisible = useIsVisible(aboutRef);
  // console.log('about visible?',isVisible)


  return (
    <div className='test-container'>
    
       <div className="test" ref={ref} >
        
        </div>
    </div>
  )
}

export default AppContainer(
  MotionContainer(TestComponent, 'test'),
   'test',
   'bg-2'
)
