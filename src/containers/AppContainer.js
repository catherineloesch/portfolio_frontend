import React from 'react'
// import { NavDots } from './../components/Nav'
// import ContactIcons from './ContactIcons'


const AppContainer = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app-cont ${classNames}`}>

        <div className='app-wrapper flex'>
        
            <Component />
        </div>

      
    </div>
  )
}

export default AppContainer
