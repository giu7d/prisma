import React from 'react'
import { Input } from '../Input'
import { InputAreaWithButtonWrapper } from './styles'

interface IInputAreaWithButton
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactElement
}

export const InputAreaWithButton: React.FC<IInputAreaWithButton> = ({
  children,
  ...props
}) => {
  return (
    <InputAreaWithButtonWrapper>
      <Input.Base {...props} />
      {children}
    </InputAreaWithButtonWrapper>
  )
}
