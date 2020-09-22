import React from 'react'

import HeroLogo from './Logo.svg'

import('~/components/Home/Hero.scss')

export const Hero:React.FC = () => {
  return (
    <div className='hero'>
      <img
        className='hero__image'
        src={HeroLogo}
      />
    </div>
  )
}