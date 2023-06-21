import { navItems } from './navItems';
import { CurrentContext } from '../../contexts/CurrentContext';
import React, { useContext } from 'react'

//styling in App.scss file


const NavDots = () => {
  const active = useContext(CurrentContext)
  console.log(active.current)

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
