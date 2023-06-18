import React from 'react'
import { navItems } from './navItems';

//styling in App.scss file


const NavDots = ({ active }) => {
  return (
    <div className='nav-dots'>
        { navItems.map((item, index) => (
          <a
            href={`#${item}`}
            key={item+index}
            className='nav-dot'
            style={active === item ? {backgroundColor: '#916265'} : {}}
          > </a>
      ))}
      
    </div>
  )
}

export default NavDots
