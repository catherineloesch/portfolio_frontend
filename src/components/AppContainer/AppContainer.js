import React from 'react'
import { NavDots } from '../Nav'
import ContactIcons from '../ContactIcons'


const AppContainer = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app-container ${classNames}`}>
        <ContactIcons />

        <div className='app-wrapper flex'>
            <Component />


        </div>
        <NavDots active={idName}/>
    </div>
  )
}

export default AppContainer
