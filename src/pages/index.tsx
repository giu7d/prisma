import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/containers/sections/Hero'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Prisma</title>
      </Head>
      <Hero />
    </>
  )
}

export default Home
