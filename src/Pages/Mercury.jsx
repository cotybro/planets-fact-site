import React, { useState } from 'react'
import planetInfo from '../data.json'
//Components
import Planet from '../Components/Planet/Planet'

// Images
import planet from '../assets/Images/planet-mercury.svg'
import planetInternal from '../assets/Images/planet-mercury-internal.svg'
import mercuryGeo from '../assets/Images/geology-mercury.png'
import source from '../assets/Images/icon-source.svg'

function Mercury() {
  const [planetImg, setPlanetImg] = useState(planet)
  const [planetGeo, setPlanetGeo] = useState(false)
  const [planetContent, setPlanetContent] = useState(
    planetInfo[0].overview.content
  )
  const [planetSource, setPlanetSource] = useState(
    planetInfo[0].overview.source
  )
  const [planetOverview, setPlanetOverview] = useState(1)

  function handleOverviewClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[0].overview.content)
    setPlanetSource(planetInfo[0].overview.source)
    setPlanetGeo(false)
    setPlanetOverview(1)
  }

  function handleInternalStructureClick() {
    setPlanetImg(planetInternal)
    setPlanetContent(planetInfo[0].structure.content)
    setPlanetSource(planetInfo[0].structure.source)
    setPlanetGeo(false)
    setPlanetOverview(2)
  }

  function handleSurfaceGeologyClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[0].geology.content)
    setPlanetSource(planetInfo[0].geology.source)
    setPlanetGeo(true)
    setPlanetOverview(3)
  }

  return (
    <Planet>
      <div className='planet__container__top'>
        <div className='planet__img__container'>
          <img
            src={planetImg}
            alt={planetInfo[0].name}
            className='planet__img'
          />
          {planetGeo === true ? (
            <img
              src={mercuryGeo}
              alt='Mercury Geology'
              className='planet__geo__img'
            />
          ) : null}
        </div>
        <div className='planet__info'>
          <p className='planet__name'>{planetInfo[0].name}</p>
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
                planetOverview === 1 ? 'mercury__active' : ''
              }`}
              onClick={handleOverviewClick}
            >
              <p className='overview__title'>
                01 <span>overview</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 2 ? 'mercury__active' : ''
              }`}
              onClick={handleInternalStructureClick}
            >
              <p className='overview__title'>
                02 <span>internal structure</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 3 ? 'mercury__active' : ''
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
          <p className='stat__number'>{planetInfo[0].rotation}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Revolution Time</p>
          <p className='stat__number'>{planetInfo[0].revolution}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Radius</p>
          <p className='stat__number'>{planetInfo[0].radius}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Average Temp.</p>
          <p className='stat__number'>{planetInfo[0].temperature}</p>
        </div>
      </div>
    </Planet>
  )
}

export default Mercury
