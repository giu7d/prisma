import React from 'react'

import { HeroStyled } from './styles'
import heroBackground from '../../../assets/hero-bg.png'

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
