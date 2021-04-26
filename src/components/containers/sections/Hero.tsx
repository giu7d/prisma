import React from 'react'
import { useTheme } from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

import { Button } from '../../fragments/Button'
import { Callout } from '../../fragments/Hero/Callout'
import { Hero as HeroWrapper } from '../../fragments/Hero'
import { HeroFloatButton } from '../../fragments/Hero/HeroFloatButton'

export const Hero = () => {
  const theme = useTheme()

  return (
    <HeroWrapper>
      <Callout
        title="Prisma"
        callout="ed ut perspiciatis unde omnis iste natus error."
      >
        <Button.Text>Entrar em contato</Button.Text>
        <HeroFloatButton
          className="push-go-down"
          background={theme.colors.background.lighter}
          opacity={0.2}
          blur="50px"
        >
          <FiChevronDown />
        </HeroFloatButton>
      </Callout>
    </HeroWrapper>
  )
}
