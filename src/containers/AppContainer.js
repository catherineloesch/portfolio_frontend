import React from 'react'



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
