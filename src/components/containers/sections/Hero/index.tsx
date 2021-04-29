import React, { FormEvent } from 'react'

import Logo from '../../../../assets/logo.svg'
import { Button } from '../../../fragments/Button'
import { InputAreaWithButton } from '../../../fragments/Form/InputAreaWithButton'
import { HeroCalloutForm } from '../../../fragments/Hero/CalloutForm'
import { HeroLogo } from '../../../fragments/Hero/Logo'
import { HeroWrapper } from './styles'

export const Hero = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <HeroWrapper>
      <HeroLogo>
        <Logo />
      </HeroLogo>
      <HeroCalloutForm onSubmit={handleSubmit}>
        <h3>
          Lorem Ipsum <br /> ed ut perspiciatis unde omnis iste natus error.
        </h3>
        <InputAreaWithButton
          name="email"
          type="email"
          placeholder="Qual é o seu email?"
        >
          <Button.Submit type="submit">Fale comigo!</Button.Submit>
        </InputAreaWithButton>
      </HeroCalloutForm>
    </HeroWrapper>
  )
}
