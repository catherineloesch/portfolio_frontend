import React from 'react'
import { dotItems } from './navItems';


const NavDots = ({ active }) => {
  return (
    <div className='nav-dots'>
        { dotItems.map((item, index) => (
          <a
          href={`#${item}`}
             key={item+index}
             className='nav-dot'
             style={active === item ? {backgroundColor: '#313BAC'} : {}}
             />

      ))}
      
    </div>
  )
}

export default NavDots
