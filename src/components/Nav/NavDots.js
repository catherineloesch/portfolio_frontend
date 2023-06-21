import { navItems } from './navItems';
import React from 'react'

//styling in App.scss file


const NavDots = () => {
  return (
    <div className='nav-dots'>
        { navItems.map((item, index) => (
          <a
            href={`#${item}`}
            id={`${item}-dot`}
            key={item+index}
            className='nav-dot'
           
          >
          </a>
      ))}
      
    </div>
  )
}

export default NavDots
