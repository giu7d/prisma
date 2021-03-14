import styled from 'styled-components'
import { Button } from '../Button'

export const HeroFloatButton = styled(Button.Icon)`
  @media screen and (min-width: 750px) {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 64px;
  }
`
