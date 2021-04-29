import React, { FormEvent } from 'react'

import Logo from '../../../../assets/logo.svg'
import {
  HeroCallout,
  HeroLogo,
  HeroWrapper,
  InputArea,
  SubmitButton
} from './styles'

export const Hero = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <HeroWrapper>
      <HeroLogo>
        <Logo />
      </HeroLogo>
      <HeroCallout onSubmit={handleSubmit}>
        <h3>
          Lorem Ipsum <br /> ed ut perspiciatis unde omnis iste natus error.
        </h3>
        <InputArea>
          <input name="email" type="email" placeholder="Qual é o seu email?" />
          <SubmitButton type="submit">Fale comigo!</SubmitButton>
        </InputArea>
      </HeroCallout>
    </HeroWrapper>
  )
}
