import React from 'react'

import { AppBarNavigationVerticalStyled } from './styles'

interface NavigationItem {
  title: string
  onClick: () => void
}

interface IAppBarNavigationVertical {
  previous?: NavigationItem
  current: NavigationItem
  next?: NavigationItem
}

export const AppBarNavigationVertical: React.FC<IAppBarNavigationVertical> = ({
  previous,
  current,
  next
}) => {
  return (
    <AppBarNavigationVerticalStyled>
      {previous && (
        <a className="nav-opacity" onClick={previous.onClick}>
          {previous.title}
        </a>
      )}
      <a className="nav-current" onClick={current.onClick}>
        {current.title}
      </a>
      {next && (
        <a className="nav-opacity" onClick={next.onClick}>
          {next.title}
        </a>
      )}
    </AppBarNavigationVerticalStyled>
  )
}
