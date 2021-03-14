import React from 'react'
import Head from 'next/head'
import { useTheme } from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

import { Hero } from '../components/fragments/Hero'
import { Button } from '../components/fragments/Button'
import { Callout } from '../components/fragments/Hero/Callout'
import { HeroFloatButton } from '../components/fragments/Hero/HeroFloatButton'

const Home: React.FC = () => {
  const theme = useTheme()

  return (
    <div>
      <Head>
        <title>Prisma - Home</title>
      </Head>
      <Hero>
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
      </Hero>
      <div>Hello World</div>
    </div>
  )
}

export default Home
