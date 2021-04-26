import React from 'react'
import { AppBarNavigationVertical } from '../fragments/AppBar/Navigation/Vertical'
import { AppBar as AppBarFragment } from '../fragments/AppBar'

const PAGES = [
  {
    title: 'INICIO',
    route: '/'
  },
  {
    title: 'QUEM SOMOS',
    route: '/about'
  },
  {
    title: 'O QUE FAZEMOS',
    route: '/tech'
  },
  {
    title: 'PORTFÓLIO',
    route: '/works'
  },
  {
    title: 'CONTATO',
    route: '/contact'
  }
]

export const AppBar = () => {
  return (
    <AppBarFragment>
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
    </AppBarFragment>
  )
}
