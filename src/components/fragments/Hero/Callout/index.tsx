import React from 'react'

import Logo from '../../../../assets/logo.svg'
import { CalloutStyled } from './styles'

interface ICalloutProps {
  title: string
  callout: string
}

export const Callout = ({ title, callout, children }) => {
  return (
    <CalloutStyled>
      <div className="callout-logo">
        <Logo />
      </div>
      <h1>{title}</h1>
      <h2>{callout}</h2>
      <div className="callout-actions">{children}</div>
    </CalloutStyled>
  )
}
