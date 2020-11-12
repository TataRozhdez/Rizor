import React from 'react'
import { Reveal, Tween } from 'react-gsap'
import videoOneImg from '../../../resources/img/video1.png'
import arrowImg from '../../../resources/img/arrow.png'
import playBtn from '../../../resources/img/playBtn.png'
import './Main.css'

export const Main = () => {
  return (
    <div className='main'>
      <div className='main-title'>
        <h1 className=''>RIzor</h1>
        <h1>Hovertrax</h1>
        <h1>4.0</h1>
        <p>Маневренность, легкость,</p>
        <p>экологичность</p>
        <img className='main-title_arrow-down' src={arrowImg} alt='Arrow' />
      </div>
      <Reveal repeat>
        <div className='main-video'>
          <Tween
            from={{ x: '-50%', opacity: 0 }}
            to={{ x: '0%', opacity: 1 }}
            duration={1}
          >
            <img className='video-content' src={videoOneImg} alt='video' />
          </Tween>
          <Tween from={{ opacity: 0 }} delay={1} duration={2}>
            <div className='video_side-block'>
              <p>
                <span className='video_side-block_corner-arrow' />
                Смотреть видео
              </p>
              <img
                className='play-btn-rightside'
                src={playBtn}
                alt='Play button'
              />
            </div>
          </Tween>
        </div>
      </Reveal>
    </div>
  )
}
