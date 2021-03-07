import React from 'react'

import heroBackground from '../../../assets/hero-bg.png'
import { HeroStyled } from './styles'

export const Hero: React.FC = ({ children }) => {
  return (
    <HeroStyled>
      <div className="hero-background">
        <img src={heroBackground} />
      </div>
      {children}
    </HeroStyled>
  )
}
