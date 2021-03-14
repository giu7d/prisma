import React from 'react'

import Logo from '../../../../assets/logo.svg'
import { CalloutStyled } from './styles'

interface ICalloutProps {
  title: string
  callout: string
}

export const Callout: React.FC<ICalloutProps> = ({
  title,
  callout,
  children
}) => {
  return (
    <CalloutStyled>
      <div className="callout-logo">
        <Logo />
      </div>
      <div className="callout-content">
        <h1>{title}</h1>
        <h2>{callout}</h2>
        <div className="callout-actions">{children}</div>
      </div>
    </CalloutStyled>
  )
}
