import React from 'react'
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
      <div className='main-video'>
        <img className='video-content' src={videoOneImg} alt='video' />
        <div className='video_side-block'>
          <p>
            <span className='video_side-block_corner-arrow' />
            Смотреть видео
          </p>
          <img src={playBtn} alt='Play button' />
        </div>
      </div>
    </div>
  )
}
