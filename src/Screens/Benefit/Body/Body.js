import React from 'react'
import videoImg2 from '../../../resources/img/video2.png'
import videoImg3 from '../../../resources/img/video3.png'
import playBtnImg from '../../../resources/img/playBtn2.png'
import bikeImg from '../../../resources/img/bike.png'
import playBtn from '../../../resources/img/playBtn.png'
import './Body.css'

const colors = ['yellow', 'blue', 'red', 'gray', 'black']

export const Body = () => {
  return (
    <div className='body'>
      <div className='body_video-block'>
        <img className='body_play-btn' src={playBtnImg} alt='Play video' />
        <img src={videoImg2} alt='Video' />
        <div className='body_benefit design'>
          <h3>преимущества</h3>
          <h2>дизайн</h2>
          <p>Внешний вид скутера дышит</p>
          <p>идеями футуризма:</p>
          <ul>
            <li>
              <span className='black-line' />
              плавные линии
            </li>
            <li>
              <span className='black-line' />
              подсветка светодиодными индикаторами
            </li>
            <li>
              <span className='black-line' />
              рельефные бамперы, оснащенные защитными панелями
            </li>
          </ul>
        </div>
        <div className='body_benefit color'>
          <span className='benefit_side-corner-arrow' />
          <h2>цвет</h2>
          <p>Модель представлена сразу в нескольких цветах.</p>
          <div className='color-choose'>
            <ul>
              {colors.map((i, index) => (
                <li key={index} className={i + ' color-item'} />
              ))}
            </ul>
            <img className='bike-image' src={bikeImg} alt='Scuter' />
          </div>
        </div>
      </div>
      <div className='modes'>
        <div className='body_benefit'>
          <h2>режимы</h2>
          <p>
            Помимо «умной» подсветки, <strong>Hovertrax 4.0</strong> снабжён
            двумя скоростными режимами.
          </p>
          <ul>
            <li>
              <span className='black-line' />
              Один для продвинутых пользователей
            </li>
            <li>
              <span className='black-line' />
              Второй для новичков
            </li>
          </ul>
          <div className='speeds'>
            <div>
              <h1>13.2</h1>
              <h3>км/ч</h3>
              Максимальная скорость
            </div>
            <div>
              <h1>2</h1>
              Скоростных режима
            </div>
          </div>
        </div>
        <div className='modes_video'>
          <img className='modes_img' src={videoImg3} alt='Play button' />
          <div className='modes-video_side-block'>
            <img src={playBtn} alt='Play video' />
            <p>
              <span className='modes-video_arrow-corner' />
              Смотреть видео
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
