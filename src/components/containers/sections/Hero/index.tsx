import React, { FormEvent, useState } from 'react'

import Logo from '../../../../assets/logo.svg'
import { Button } from '../../../fragments/Button'
import { InputAreaWithButton } from '../../../fragments/Form/InputAreaWithButton'
import {
  HeroCalloutForm,
  HeroCalloutFormSubmitted
} from '../../../fragments/Hero/CalloutForm'
import { HeroLogo } from '../../../fragments/Hero/Logo'
import { HeroWrapper } from './styles'

export const Hero = () => {
  const [form, setForm] = useState({
    email: undefined
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    try {
      const email = event.target[0].value
      setForm({ email })
    } catch (err) {
      console.warn(err)
      setForm({
        email: undefined
      })
    }
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

        {!form.email ? (
          <InputAreaWithButton
            name="email"
            type="email"
            placeholder="Qual é o seu email?"
          >
            <Button.Submit type="submit">Fale comigo!</Button.Submit>
          </InputAreaWithButton>
        ) : (
          <HeroCalloutFormSubmitted>
            <b>Pronto!</b>&nbsp;&nbsp;Entraremos em contato!
          </HeroCalloutFormSubmitted>
        )}
      </HeroCalloutForm>
    </HeroWrapper>
  )
}
