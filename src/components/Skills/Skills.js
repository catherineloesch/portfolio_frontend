import React from 'react'
import { motion } from 'framer-motion'
import { skills } from './../../api_data/api_skills'
import ReactTooltip from'react-tooltip'
import './Skills.scss'
// import { AppContainer } from '../AppContainer'
// import { urlFor, client } from './../../api'


const Skills = () => {

  // const [experience, setExperience] = useState([])
  // const [skills, setSkills] = useState([])

  // useEffect(() => {
  //   const experiencesQuery = '*[_type == "experiences"]'
  //   const skillsQuery = '*[_type == "skills"]'

  //   client.fetch(experiencesQuery)
  //   .then((data) => {
  //     setExperience(data)
  //   })

  //   client.fetch(skillsQuery)
  //   .then((data) => {
  //     console.log(data)
  //     setSkills(data)
  //   })

  // }, [])

  return (
    <div className='skills'>
      <h2 className='h-text'>Skills & Experience</h2>
      <div className='skills-container'>
      <motion.div className="skills-list">
      {skills.map((skill) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="skills-item flex"
          key={skill.name}
        >
          <div
            className="flex"
            style={{ backgroundColor: skill.bgColor }}
          >
            <img src={skill.icon} alt={skill.name} />
          </div>
          <p className="p-text">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
      </div>
      
    </div>
  )
}

export default Skills
