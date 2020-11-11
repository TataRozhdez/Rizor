import React from 'react'
import logoImg from '../../resources/img/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = ({ step1, step2, step3 }) => {
  return (
    <div className='navbar'>
      <img className='logo' src={logoImg} alt='logo' />
      <ul>
        <li className='navbar-link'>
          {step1 ? (
            <Link className='isActive' to='/'>
              Преимущества
            </Link>
          ) : (
            <Link to='/'>Преимущества</Link>
          )}
        </li>
        <li className='navbar-link'>
          {step2 ? (
            <Link className='isActive' to='/features'>
              характеристики
            </Link>
          ) : (
            <Link to='/features'>характеристики</Link>
          )}
        </li>
        <li className='navbar-link'>
          {step3 ? (
            <Link className='isActive' to='/forwho'>
              для кого
            </Link>
          ) : (
            <Link to='/forwho'>для кого</Link>
          )}
        </li>
      </ul>
    </div>
  )
}
