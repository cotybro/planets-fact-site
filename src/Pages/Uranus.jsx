import React, { useState } from 'react'
import planetInfo from '../data.json'
//Components
import Planet from '../Components/Planet/Planet'

// Images
import planet from '../assets/Images/planet-uranus.svg'
import planetInternal from '../assets/Images/planet-uranus-internal.svg'
import uranusGeo from '../assets/Images/geology-uranus.png'
import source from '../assets/Images/icon-source.svg'

function Uranus() {
  const [planetImg, setPlanetImg] = useState(planet)
  const [planetGeo, setPlanetGeo] = useState(false)
  const [planetContent, setPlanetContent] = useState(
    planetInfo[6].overview.content
  )
  const [planetSource, setPlanetSource] = useState(
    planetInfo[6].overview.source
  )
  const [planetOverview, setPlanetOverview] = useState(1)

  const [mobileOverview, setMobileOverview] = useState('overview')

  function handleOverviewClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[6].overview.content)
    setPlanetSource(planetInfo[6].overview.source)
    setPlanetGeo(false)
    setPlanetOverview(1)
  }

  function handleInternalStructureClick() {
    setPlanetImg(planetInternal)
    setPlanetContent(planetInfo[6].structure.content)
    setPlanetSource(planetInfo[6].structure.source)
    setPlanetGeo(false)
    setPlanetOverview(2)
  }

  function handleSurfaceGeologyClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[6].geology.content)
    setPlanetSource(planetInfo[6].geology.source)
    setPlanetGeo(true)
    setPlanetOverview(3)
  }

  return (
    <Planet>
      <div className='planet__container__top'>
        <div className='planet__mobile__overview'>
          <div
            className={`${
              mobileOverview === 'overview' ? 'uranus__overview__active' : ''
            } mobile__overview__item`}
            onClick={() => {
              setMobileOverview('overview')
              handleOverviewClick()
            }}
          >
            <p className='mobile__overview__title'>overview</p>
          </div>
          <div
            className={`${
              mobileOverview === 'structure' ? 'uranus__overview__active' : ''
            } mobile__overview__item`}
            onClick={() => {
              setMobileOverview('structure')
              handleInternalStructureClick()
            }}
          >
            <p className='mobile__overview__title'>structure</p>
          </div>
          <div
            className={`${
              mobileOverview === 'surface' ? 'uranus__overview__active' : ''
            } mobile__overview__item`}
            onClick={() => {
              handleSurfaceGeologyClick()
              setMobileOverview('surface')
            }}
          >
            <p className='mobile__overview__title'>surface</p>
          </div>
        </div>
        <div className='planet__img__container'>
          <img
            src={planetImg}
            alt={planetInfo[6].name}
            className='planet__img'
          />
          {planetGeo === true ? (
            <img
              src={uranusGeo}
              alt='Uranus Geology'
              className='planet__geo__img'
            />
          ) : null}
        </div>
        <div className='planet__info'>
          <div className='planet__info__header'>
            <p className='planet__name'>{planetInfo[6].name}</p>
            <p className='planet__info__text'>{planetContent}</p>
            <p className='source__link'>
              Source : &nbsp;
              <a href={planetSource} target='_blank'>
                Wikipedia
              </a>
              <img src={source} alt='Source' className='source__img' />
            </p>
          </div>
          <div className='overview__container'>
            <div
              className={`overview__item ${
                planetOverview === 1 ? 'uranus__active' : ''
              }`}
              onClick={handleOverviewClick}
            >
              <p className='overview__title'>
                01 <span>overview</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 2 ? 'uranus__active' : ''
              }`}
              onClick={handleInternalStructureClick}
            >
              <p className='overview__title'>
                02 <span>internal structure</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 3 ? 'uranus__active' : ''
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
          <p className='stat__number'>{planetInfo[6].rotation}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Revolution Time</p>
          <p className='stat__number'>{planetInfo[6].revolution}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Radius</p>
          <p className='stat__number'>{planetInfo[6].radius}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Average Temp.</p>
          <p className='stat__number'>{planetInfo[6].temperature}</p>
        </div>
      </div>
    </Planet>
  )
}

export default Uranus
