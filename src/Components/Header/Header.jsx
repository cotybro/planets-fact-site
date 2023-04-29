import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__left'>
          <Link to='/'>
            <h1 className='header__title'>The Planets</h1>
          </Link>
        </div>
        <div className='header__right'>
          <ul>
            <Link to='/'>
              <li className='planet__link'>Mercury</li>
            </Link>
            <Link to='/venus'>
              <li className='planet__link'>Venus</li>
            </Link>
            <Link to='/earth'>
              <li className='planet__link'>Earth</li>
            </Link>
            <Link to='/mars'>
              <li className='planet__link'>Mars</li>
            </Link>
            <Link to='/jupiter'>
              <li className='planet__link'>Jupiter</li>
            </Link>
            <Link to='/saturn'>
              <li className='planet__link'>Saturn</li>
            </Link>
            <Link to='/uranus'>
              <li className='planet__link'>Uranus</li>
            </Link>
            <Link to='/neptune'>
              <li className='planet__link'>Neptune</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header