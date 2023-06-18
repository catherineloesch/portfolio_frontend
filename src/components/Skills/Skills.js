import React from 'react'
import { motion } from 'framer-motion'
import { skills } from './../../api_data/api_skills'
import { experience } from './../../api_data/api_experience'
import './Skills.scss'
import { AppContainer, MotionContainer } from '../../containers'
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
              id={skill.id}
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
        <motion.div className='skills-exp'>
        {experience.map((period) => (
          <motion.div
          className='skills-exp-item'
          key={period.year}
          >
            <div className='skills-exp-year'>
              <p className='bold'>{period.year}</p>
            </div>

            <motion.div className='skills-exp-works'>
          

              {period.exp.map((work) => (
      
              <div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                <h4 className='bold'>{work.name}</h4>
                <p className='p-text'>{work.company}</p>
                <p className='p-text desc'>{work.description}
                </p>
                </motion.div>
            

              </div>
              


        ))}
            </motion.div>



          </motion.div>
          ))}

    
            
        </motion.div>
      </div>
      
    </div>
  )
}

export default AppContainer(
  MotionContainer(Skills, 'skills'),
   'skills',
   'bg-white'
   )
