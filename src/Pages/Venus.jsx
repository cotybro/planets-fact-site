import React, { useState } from 'react'
import planetInfo from '../data.json'
//Components
import Planet from '../Components/Planet/Planet'

// Images
import planet from '../assets/Images/planet-venus.svg'
import planetInternal from '../assets/Images/planet-venus-internal.svg'
import venusGeo from '../assets/Images/geology-venus.png'
import source from '../assets/Images/icon-source.svg'

function Venus() {
  const [planetImg, setPlanetImg] = useState(planet)
  const [planetGeo, setPlanetGeo] = useState(false)
  const [planetContent, setPlanetContent] = useState(
    planetInfo[1].overview.content
  )
  const [planetSource, setPlanetSource] = useState(
    planetInfo[1].overview.source
  )
  const [planetOverview, setPlanetOverview] = useState(1)

  const [mobileOverview, setMobileOverview] = useState('overview')

  function handleOverviewClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[1].overview.content)
    setPlanetSource(planetInfo[1].overview.source)
    setPlanetGeo(false)
    setPlanetOverview(1)
  }

  function handleInternalStructureClick() {
    setPlanetImg(planetInternal)
    setPlanetContent(planetInfo[1].structure.content)
    setPlanetSource(planetInfo[1].structure.source)
    setPlanetGeo(false)
    setPlanetOverview(2)
  }

  function handleSurfaceGeologyClick() {
    setPlanetImg(planet)
    setPlanetContent(planetInfo[1].geology.content)
    setPlanetSource(planetInfo[1].geology.source)
    setPlanetGeo(true)
    setPlanetOverview(3)
  }

  return (
    <Planet>
      <div className='planet__container__top'>
        <div className='planet__mobile__overview'>
          <div
            className={`${
              mobileOverview === 'overview' ? 'venus__overview__active' : ''
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
              mobileOverview === 'structure' ? 'venus__overview__active' : ''
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
              mobileOverview === 'surface' ? 'venus__overview__active' : ''
            } mobile__overview__item`}
            onClick={() => {
              handleSurfaceGeologyClick()
              setMobileOverview('surface')
            }}
          >
            <p className='mobile__overview__title'>surface</p>
          </div>
        </div>
        <div className='planet__img__container planet__mb'>
          <img
            src={planetImg}
            alt={planetInfo[1].name}
            className='planet__img'
          />
          {planetGeo === true ? (
            <img
              src={venusGeo}
              alt='Venus Geology'
              className='planet__geo__img'
            />
          ) : null}
        </div>
        <div className='planet__info'>
          <div className='planet__info__header'>
            <p className='planet__name'>{planetInfo[1].name}</p>
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
                planetOverview === 1 ? 'venus__active' : ''
              }`}
              onClick={handleOverviewClick}
            >
              <p className='overview__title'>
                01 <span>overview</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 2 ? 'venus__active' : ''
              }`}
              onClick={handleInternalStructureClick}
            >
              <p className='overview__title'>
                02 <span>internal structure</span>
              </p>
            </div>
            <div
              className={`overview__item ${
                planetOverview === 3 ? 'venus__active' : ''
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
          <p className='stat__number'>{planetInfo[1].rotation}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Revolution Time</p>
          <p className='stat__number'>{planetInfo[1].revolution}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Radius</p>
          <p className='stat__number'>{planetInfo[1].radius}</p>
        </div>
        <div className='planet__stats'>
          <p className='stat__title'>Average Temp.</p>
          <p className='stat__number'>{planetInfo[1].temperature}</p>
        </div>
      </div>
    </Planet>
  )
}

export default Venus
