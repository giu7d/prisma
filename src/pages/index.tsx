import React from 'react'
import Head from 'next/head'

import { DefaultTemplate } from '../components/templates/DefaultTemplate'
import { Hero } from '../components/containers/sections/Hero'
import { About } from '../components/containers/sections/About'
import { Techs } from '../components/containers/sections/Techs'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Prisma - Home</title>
      </Head>
      <Hero />
      <DefaultTemplate>
        <About />
        <Techs />
      </DefaultTemplate>
    </>
  )
}

export default Home
