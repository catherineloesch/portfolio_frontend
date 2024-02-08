import { useRef } from 'react'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { works } from '../../api_data/api_projects'
import { AppContainer, MotionContainer } from '../../containers'

import './Projects.scss'
// import Project from './Project'


const Single = ({item}) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0,1], [-300, 300])

  return <section>
    <div className='container'>
    <div className='wrapper'>
      <div className='img-container' ref={ref}>
        <img src={item.imgUrl} alt="" />

      </div>
      <motion.div className='txt-container' style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>Take a look</button>

      </motion.div>
    </div>

    </div>
  </section>
}

const Projects = () => {

//   const active = useContext(CurrentContext)

//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const ref = useRef('work');
//   const navDots = document.querySelectorAll('.nav-dot');
//   const dot = document.querySelector('#work-dot');


//   useEffect(() => {
   
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsIntersecting(entry.isIntersecting);
//       },
//       { rootMargin: "-300px" }
//     );
//     if (isIntersecting) {
//       active.current = 'work'
//       navDots.forEach(dot => dot.style.backgroundColor = colors.navDotInactive);
//       dot.style.backgroundColor = colors.navDotActive;
     
//     }

//     observer.observe(ref.current);
//     return () => observer.disconnect();

//   }, [isIntersecting, active, dot, navDots]);


  const ref2 = useRef();

  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='projects' >
        <div className='progress-container' ref={ref2}>
            <h1>Latest Projects</h1>
            <motion.div className='progress-bar' style={{ scaleX }}></motion.div>
        </div>

        {works.map((item, index) => (
                <Single item={item} key={`project-${index}`}/>
        ))}
      
      
    </div>
  )
}

export default AppContainer(
    MotionContainer(Projects, 'projects'),
     'projects',
     'bg-2'
  )