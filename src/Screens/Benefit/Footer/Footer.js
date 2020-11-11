import React from 'react'
import { Link } from 'react-router-dom'
import teamImg from '../../../resources/img/footerImg.png'
import footerGear from '../../../resources/img/gear.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <img className='footer-img' src={teamImg} alt='Team' />
      <img className='footer-gear' src={footerGear} alt='Gear' />
      <div className='footer-brand'>
        <h1>4.0</h1>
        <h1>rizor</h1>
      </div>
      <div className='footer-text'>
        <h3>для кого</h3>
        <p>
          При максимально выдерживаемой нагрузке в 100 кг отлично подойдёт, как
          для подрастающего поколения,так и для более взрослых «наездников».
        </p>
        <p>Это единственный гироскутер со специальным детским режимом езды.</p>
        <div>
          <Link to='/forwho'>перейти в каталог</Link>
        </div>
      </div>
    </div>
  )
}
