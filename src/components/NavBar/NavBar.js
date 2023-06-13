import React from 'react'
import { Link } from "react-router-dom";

import './NavBar.scss'

const NavBar = () => {

  const navItems = [
    'home',
    'about',
    'work',
    'skills',
    'contact'
  ]


  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={require('./../../assets/html_tag.png')} />
      </div>
      <ul className='nav-links-list'>
        {navItems.map(item => (
          <li key={`nav-${item}`} className='flex p-text'>
            <div></div>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default NavBar
