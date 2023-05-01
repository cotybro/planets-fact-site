import React, { useState } from 'react'
import planetInfo from '../data.json'
//Components
import Planet from '../Components/Planet/Planet'

// Images
import planet from '../assets/Images/planet-jupiter.svg'
import planetInternal from '../assets/Images/planet-jupiter-internal.svg'
import jupiterGeo from '../assets/Images/geology-jupiter.png'
import source from '../assets/Images/icon-source.svg'

function Jupiter() {
  const [planetImg, setPlanetImg] = useState(planet)
  const [planetGeo, setPlanetGeo] = useState(false)
  const [planetContent, setPlanetContent] = useState(
    planetInfo[4].overview.content
  )
  const [planetSource, setPlanetSource] = useState(
    planetInfo[4].overview.source
  )
  const [planetOverview, setPlanetOverview] = useState(1)

  function handleOverviewClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[4].overview.content)
    setPlanetSource(planetInfo[4].overview.source)
    setPlanetGeo(false)
    setPlanetOverview(1)
  }

  function handleInternalStructureClick() {
    setPlanetImg(planetInternal)
    setPlanetContent(planetInfo[4].structure.content)
    setPlanetSource(planetInfo[4].structure.source)
    setPlanetGeo(false)
    setPlanetOverview(2)
  }

  function handleSurfaceGeologyClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[4].geology.content)
    setPlanetSource(planetInfo[4].geology.source)
    setPlanetGeo(true)
    setPlanetOverview(3)
  }

  return (
    <Planet>
      <div className='planet__container__top'>
        <div className='planet__img__container'>
          <img
            src={planetImg}
            alt={planetInfo[4].name}
            className='planet__img'
          />
          {planetGeo === true ? (
            <img
              src={jupiterGeo}
              alt='Jupiter Geology'
              className='planet__geo__img'
            />
          ) : null}
        </div>
        <div className='planet__info'>
          <p className='planet__name'>{planetInfo[4].name}</p>
          <p className='planet__info__text'>{planetContent}</p>
          <p className='source__link'>
            Source : &nbsp;
            <a href={planetSource} target='_blank'>
              Wikipedia
            </a>
            <img src={source} alt='Source' className='source__img' />
          </p>
          <div className='overview__container'>
            <div
              className={`overview__item ${
                planetOverview === 1 ? 'jupiter__active' : ''
              }`}
              onClick={handleOverviewClick}
            >
              <p className='overview__title'>
                01 <span>overview</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 2 ? 'jupiter__active' : ''
              }`}
              onClick={handleInternalStructureClick}
            >
              <p className='overview__title'>
                02 <span>internal structure</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 3 ? 'jupiter__active' : ''
              }`}
              onClick={handleSurfaceGeologyClick}
            >
              <p className='overview__title'>
                03 <span>surface geology</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='planet__container__bottom'>
        <div className='planet__stats'>
          <p className='stat__title'>Rotation Time</p>
          <p className='stat__number'>{planetInfo[4].rotation}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Revolution Time</p>
          <p className='stat__number'>{planetInfo[4].revolution}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Radius</p>
          <p className='stat__number'>{planetInfo[4].radius}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Average Temp.</p>
          <p className='stat__number'>{planetInfo[4].temperature}</p>
        </div>
      </div>
    </Planet>
  )
}

export default Jupiter
