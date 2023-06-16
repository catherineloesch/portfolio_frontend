import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from './../../assets/images';
import { navItems } from './navItems';

import './NavBar.scss'

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        {/*
                <img src={images.duck} alt='duck'/>


        */}
      </div>
      <ul className='nav-links-list'>
        {navItems.map(item => (
          <li key={`nav-${item}`} className='flex p-text'>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='hamburger'>
          <HiMenuAlt4 onClick={() => (setMenuToggle(true))}/>
          {menuToggle && (
              <motion.div
                whileInView = {{x: [300, 0]}}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setMenuToggle(false)} />
                  <ul>
                    {navItems.map(item => (
                      <li key={`nav-mobile-${item}`} >
                      <a href={`#${item}`} onClick={() => setMenuToggle(false)} />

                      </li>
                      
                    ))}
                </ul>
              </motion.div>)}
      </div>

    </nav>
  )
}

export default NavBar
