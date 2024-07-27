import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hamburger from './Hamburger';
import NavMobileLinks from './NavMobileLinks';

import './NavMobile.scss';

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div variants={variants} className='bg'>
        {' '}
        {/* bg */}
        <NavMobileLinks setOpen={setOpen} />
      </motion.div>
      <Hamburger setOpen={setOpen} />
    </motion.div>
  );
};

export default NavMobile;
