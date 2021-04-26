import React from 'react'
import { AppBar } from '../../containers/AppBar'
import { DefaultTemplateWrapper } from './styles'

export const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <DefaultTemplateWrapper>
      <AppBar />
      {children}
    </DefaultTemplateWrapper>
  )
}
