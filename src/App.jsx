import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

//Components
import Header from './Components/Header/Header'
import BurgerMenu from './Components/BurgerMenu/BurgerMenu'

//Pages
import Earth from './Pages/Earth'
import Jupiter from './Pages/Jupiter'
import Mars from './Pages/Mars'
import Mercury from './Pages/Mercury'
import Neptune from './Pages/Neptune'
import Saturn from './Pages/Saturn'
import Uranus from './Pages/Uranus'
import Venus from './Pages/Venus'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div className='planet-facts'>
      <Header active={active} setActive={setActive} />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Mercury />} />
          <Route path='/venus' element={<Venus />} />
          <Route path='/earth' element={<Earth />} />
          <Route path='/mars' element={<Mars />} />
          <Route path='/jupiter' element={<Jupiter />} />
          <Route path='/saturn' element={<Saturn />} />
          <Route path='/uranus' element={<Uranus />} />
          <Route path='/neptune' element={<Neptune />} />
        </Routes>
        {active && <BurgerMenu active={active} setActive={setActive} />}
      </div>
    </div>
  )
}

export default App
