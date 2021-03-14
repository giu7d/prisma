import React from 'react'
import Head from 'next/head'
import { useTheme } from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'

import { Hero } from '../components/fragments/Hero'
import { Button } from '../components/fragments/Button'
import { Callout } from '../components/fragments/Hero/Callout'
import { HeroFloatButton } from '../components/fragments/Hero/HeroFloatButton'
import { AppBar } from '../components/fragments/AppBar'
import { AppBarNavigationVertical } from '../components/fragments/AppBar/Navigation/Vertical'

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

      <div style={{ width: '100%', height: '100vh' }}>
        <AppBar>
          <AppBarNavigationVertical
            previous={{
              title: 'Inicio',
              onClick: () => {}
            }}
            current={{
              title: 'quem somos',
              onClick: () => {}
            }}
            next={{
              title: 'O que fazemos',
              onClick: () => {}
            }}
          />
        </AppBar>
      </div>
    </div>
  )
}

export default Home
