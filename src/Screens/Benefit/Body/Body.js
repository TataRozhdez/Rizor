import React from 'react'
import { Reveal, Tween, SplitChars } from 'react-gsap'
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
        <Tween
          from={{ opacity: 0.5, rotation: '180' }}
          to={{ opacity: 1, rotation: '0' }}
          delay={1}
          duration={1}
        >
          <img className='body_play-btn' src={playBtnImg} alt='Play video' />
          <img className='design_video2' src={videoImg2} alt='Video' />
        </Tween>
        <div className='body_benefit design'>
          <Reveal repeat>
            <Tween from={{ x: '-500%', opacity: 0 }} stagger={0.1}>
              <SplitChars
                wrapper={
                  // eslint-disable-next-line
                  <h3
                    style={{
                      display: 'inline-block',
                      fontWeight: '100',
                      color: '#3a30f8',
                    }}
                  />
                }
              >
                преимущества
              </SplitChars>
            </Tween>
          </Reveal>
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
              <Reveal repeat>
                <Tween
                  to={{
                    count: {
                      value: 13.2,
                      format: () => (value) => value.toFixed(1),
                    },
                  }}
                  ease='none'
                  duration={3}
                >
                  <h1>0.0</h1>
                </Tween>
              </Reveal>
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
          <Tween
            from={{ opacity: 0.5, rotation: '90' }}
            to={{ opacity: 1, rotation: '0' }}
            delay={3}
            duration={1}
          >
            <img className='modes_img' src={videoImg3} alt='Play button' />
          </Tween>
          <Tween from={{ opacity: 0 }} delay={6} duration={2}>
            <div className='modes-video_side-block'>
              <img
                className='play-btn-rightside'
                src={playBtn}
                alt='Play video'
              />
              <p>
                <span className='modes-video_arrow-corner' />
                Смотреть видео
              </p>
            </div>
          </Tween>
        </div>
      </div>
    </div>
  )
}
