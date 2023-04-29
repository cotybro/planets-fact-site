import React from 'react'
import './Planet.css'

function Planet(props) {
  return <div className='planet__wrapper'>{props.children}</div>
}

export default Planet
