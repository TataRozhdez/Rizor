import React from 'react'
import { Link } from 'react-router-dom'
import { Reveal, Tween, SplitChars } from 'react-gsap'
import teamImg from '../../../resources/img/footerImg.png'
import footerGear from '../../../resources/img/gear.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <Reveal repeat>
        <Tween
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={0.5}
          duration={1}
        >
          <img className='footer-img' src={teamImg} alt='Team' />
          <div className='footer-brand'>
            <h1>4.0</h1>
            <h1>rizor</h1>
          </div>
        </Tween>
        <img className='footer-gear' src={footerGear} alt='Gear' />
        <div className='footer-text'>
          <Tween from={{ x: '-500%', opacity: 0 }} stagger={0.1}>
            <SplitChars
              wrapper={
                // eslint-disable-next-line
                <h3
                  style={{
                    display: 'inline-block',
                    fontWeight: '100',
                  }}
                />
              }
            >
              для кого
            </SplitChars>
          </Tween>
          <p>
            При максимально выдерживаемой нагрузке в 100 кг отлично подойдёт,
            как для подрастающего поколения,так и для более взрослых
            «наездников».
          </p>
          <p>
            Это единственный гироскутер со специальным детским режимом езды.
          </p>
          <div>
            <Link to='/forwho'>перейти в каталог</Link>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
