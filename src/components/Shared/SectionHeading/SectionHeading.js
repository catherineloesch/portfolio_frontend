import React from 'react';
import './SectionHeading.scss';
import { motion } from 'framer-motion';

const SectionHeading = ({ section, variants, children }) => {
  return (
    <motion.h1
      className={`heading-section ${section}-heading`}
      variants={variants}
    >
      {children}
    </motion.h1>
  );
};

export default SectionHeading;
