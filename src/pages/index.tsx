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
import { Typography } from '../components/fragments/Typography'

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
        <div
          style={{
            margin: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}
        >
          {/* <image sour ={{ src: 'http://via.placeholder.com/250' }} /> */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'center'
            }}
          >
            <Typography.Callout>SOU</Typography.Callout>
            <Typography.Title>GIUSEPPE SETEM</Typography.Title>
            <Typography.SubTitle>DESENVOLVEDOR</Typography.SubTitle>
          </div>
          <div
            style={{
              textAlign: 'justify'
            }}
          >
            <Typography.Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit.
            </Typography.Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
