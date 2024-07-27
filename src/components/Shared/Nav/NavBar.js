import React from 'react';
import { navItems } from './navItems';
import { motion } from 'framer-motion';

import './NavBar.scss';

const NavBar = () => {
  return (
    <motion.nav
      className='navbar'
      initial={{ x: -1500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <ul className='nav-links'>
        {navItems.navBar.map((item) => (
          <li key={`nav-${item}`} className='flex p-text'>
            <a href={`#${item}`} className='nav-anchor' id={`${item}-a`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
