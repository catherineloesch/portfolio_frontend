import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from'react-icons/hi'
import { AppContainer, MotionContainer } from '../../../containers'
import { testimonials, brands } from '../../../api_data/api_testimonials'

import './Testimonial.scss'

const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index) => setCurrentIndex(index)


const tm = testimonials[currentIndex]

  return (
    <>
      {testimonials.length && (
        <div className='testimonial flex'>
          <div className='testimonial-item flex'>

            <img src={tm.imgUrl} alt='testimonial' />
            
            <div className='testimonial-content'>
              <p className='p-text'>{tm.feedback}</p>
              <div>
              <h4 className='bold'>{tm.name}</h4>
              <h5 className='p-text'>{tm.company}</h5>
              </div>
            </div>

          </div>

          <div className='btns-tesimonial flex'>
            <div className='flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length-1 : currentIndex-1)}>
              <HiChevronLeft />
            </div>
            <div className='flex' onClick={() => handleClick(currentIndex === testimonials.length-1 ? 0 : currentIndex+1)}>
              <HiChevronRight />
            </div>
          </div>

        </div>
        )
      }

      <div className='testimonials-brands flex'>
        { brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{duration: 0.5, type: 'tween'}}
            key={brand.name}
          >
            <img src={brand.imgUrl} alt={brand.name}/>
          </motion.div>
        ))}

      </div>

    </>
  )
}

export default AppContainer(
  MotionContainer(Testimonial, 'testimonial'),
   'testimonial',
   'bg-primary'
)