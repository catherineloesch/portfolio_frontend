import React from 'react'
import { motion } from 'framer-motion'
import { AppContainer } from '../AppContainer'
import { abouts } from './../../api_data/api_about'
import './About.scss'
// import { urlFor, client } from './../../api'


const About = () => {

  // const [abouts, setAbouts] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]'

  //   client.fetch(query)
  //   .then((data) => setAbouts(data))
  //   }, [])

  return (
    <div className='about'>

      <h2 className='h-text'>About Me</h2>
      <div className='profile'>
      {abouts.map((about, index) => (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type:'tween'}}
        className='profile-item'
        key={about.title+index}
        >
        <img src={about.imgUrl} alt={about.title}/>
        <h2 className='bold' style={{ marginTop: 20}}>{about.title}</h2>
        <hp className='p-text' style={{ marginTop: 20}}>{about.description}</hp>
        </motion.div>
      ))}
      </div> 

    </div>
  )
}

export default AppContainer(About, 'about')
