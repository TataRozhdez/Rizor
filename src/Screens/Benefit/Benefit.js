import React from 'react'
import gearParallax from '../../resources/img/gear.png'
import { Navbar } from '../../components/Navbar/Navbar'
import { Main } from './Main/Main'
import { Body } from './Body/Body'
import { Footer } from './Footer/Footer'
import './Benefit.css'
import { Copyrites } from '../../components/Copyrites/Copyrites'

export const Benefit = () => {
  return (
    <div className='benefit'>
      <div className='benefit-parallax__layer'>
        <img
          className='img-parallax left-parallax'
          src={gearParallax}
          alt='Gear'
        />
        <div className='right-parallax'>
          <h1>4.0</h1>
          <h1>Rizor</h1>
        </div>
      </div>
      <Navbar step1 />
      <Main />
      <Body />
      <Footer />
      <Copyrites />
    </div>
  )
}
