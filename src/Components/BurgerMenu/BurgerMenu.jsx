import React from 'react'
import { Link } from 'react-router-dom'
import './BurgerMenu.css'

//Images
import Chevron from '../../assets/Images/icon-chevron.svg'

function BurgerMenu({ active, setActive }) {
  return (
    <div className='burger__menu'>
      <ul>
        <Link
          to='/'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__mercury'></div>
            <li className='burger__link'>Mercury</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/venus'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__venus'></div>
            <li className='burger__link'>Venus</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/earth'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__earth'></div>
            <li className='burger__link'>Earth</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/mars'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__mars'></div>
            <li className='burger__link'>Mars</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/jupiter'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__jupiter'></div>
            <li className='burger__link'>Jupiter</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/saturn'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__saturn'></div>
            <li className='burger__link'>Saturn</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/uranus'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__uranus'></div>
            <li className='burger__link'>Uranus</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
        <Link
          to='/neptune'
          className='burger__menu__item'
          onClick={() => setActive(!active)}
        >
          <div className='burger__li__container'>
            <div className='planet__circle circle__neptune'></div>
            <li className='burger__link'>Neptune</li>
          </div>
          <img src={Chevron} alt='>' />
        </Link>
      </ul>
    </div>
  )
}

export default BurgerMenu
