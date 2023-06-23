import React from 'react'
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { HiX, HiLink } from 'react-icons/hi';

export default function WorkModal({ modal, closeModal}) {
    if (!modal) return null

  return ReactDOM.createPortal(
    <>
    <div className='overlay' />
    <div className='work-modal'>
        <div className='modal-title'>
            <h1>{modal.title}
            <div className='modal-links'> 
            <a href={modal.codeLink} target='_blank' rel='noreferrer'>
                <div className='modal-icon'><AiFillGithub /></div>
            </a>
            <a href={modal.projectLink} target='_blank' rel='noreferrer'> 
                <div className='modal-icon'><HiLink /></div>
            </a>
        </div>
            </h1>
      
            <div className='btn-close-modal'>
                <button onClick={closeModal}><HiX /></button>
            </div>
        </div>
  
        <div className='modal-content flex'>
            <div className='modal-images'>
                <img src={modal.imgUrl} alt={modal.title}/>

           
            </div>

            <div className='modal-text'>
            
                <p className='p-text modal-description' style={{marginTop: 10}}>{modal.description}</p>
  
            </div>
        </div>
        <div className='modal-skills-container'>
        <motion.div className="modal-skills-list flex">
            { modal.skills.map((skill) => (
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="modal-skills-item flex"
                id={skill.id}
                key={`skill-${skill.name}`}
            >
                <div className="flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
            </motion.div>
            ))}
        </motion.div>
        </div>
        


       
      
    </div>
    </>,
    document.getElementById('portal')
  )
}
