import React from 'react'

import LogoSmall from '../../../assets/logo-sm.svg'
import { AppBarStyled } from './styles'

export const AppBar: React.FC = ({ children }) => {
  return (
    <AppBarStyled>
      <div className="appbar-logo">
        <LogoSmall />
      </div>
      {children}
    </AppBarStyled>
  )
}
