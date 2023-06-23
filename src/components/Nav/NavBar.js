import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { navItems } from './navItems';
import './NavBar.scss'

// import { images } from './../../assets/images';


const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        {/* <img src={} alt=''/> */}
      </div>

      <ul className='nav-links'>
        {navItems.map(item => (
          <li key={`nav-${item}`} className='flex p-text'>
            
            <a href={`#${item}`} className='nav-anchor' id={`${item}-a`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='hamburger'>
        <HiMenuAlt4 onClick={() => (setMenuToggle(true))}/>
          {menuToggle && (
              <motion.div
                whileInView = {{x: [300, 0]}}
                transition={{ duration: 0.85, ease: 'easeOut' }}
                className='mobile-menu'
              >
                <HiX onClick={() => setMenuToggle(false)} />
                  <ul>
                    {navItems.map(item => (
                      <li key={`nav-mobile-${item}`} >
                    <a href={`#${item}`} onClick={() => setMenuToggle(false)}>
                          {item}
                    </a>

                      </li>
                    ))}
                </ul>
              </motion.div>)}
      </div>

    </nav>
  )
}

export default NavBar
