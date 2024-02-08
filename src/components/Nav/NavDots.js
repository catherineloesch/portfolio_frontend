import { navItems } from './navItems';
import React from 'react'

//styling in App.scss file


const NavDots = () => {
  console.log('..............')
  console.log(navItems.navDots)
  return (

    <div className='nav-dots'>
        { navItems.navDots.map((item, index) => (
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
