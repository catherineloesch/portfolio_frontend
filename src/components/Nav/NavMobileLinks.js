import React from 'react'
import { motion } from 'framer-motion';
import { navItems } from './navItems';
import './NavMobile.scss'

const NavMobileLinks = () => {

    const variants =  {
        open: {
            transition: {
                staggerChildren:0.1,
            },
        }, 
        closed: {
            transition: {
                staggerChildren:0.05,
                staggerDirection: -1,
            },
        },
    };
    const itemvVariants =  {
        open: {
            y: 50,
            opacity: 1,
        }, 
        closed: {
           y: -50,
           opacity:0,
        },
    };

  return (
    <div className='mobile-nav-links' variants={variants}>
                {navItems.navBar.map(item => (
                    <motion.a key={`nav-mobile-${item}`} href={`#${item}`} variants={itemvVariants} whileHover={{scale: 1.025}} whileTap={{scale: 0.95}}>
                        {item}
                    </motion.a>
                ))}
    </div>
  )
}

export default NavMobileLinks
