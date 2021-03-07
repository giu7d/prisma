import { rgba } from 'polished'
import styled from 'styled-components'
import { ICustomBlurComponent, ICustomComponent } from '../../styles/styles'
import { getBackgroundColor, getColor, getRoundness } from '../../utils'

const Base = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  transition: 200ms opacity ease-out;

  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;

  &::-moz-focus-inner {
    border: none;
  }

  &:active {
    opacity: 0.5;
    border-style: none;
  }

  &:hover {
    opacity: 0.5;
  }
`

export const Custom = styled(Base)<ICustomComponent>`
  background: ${getBackgroundColor};
  color: ${getColor};
  border-radius: ${getRoundness};
`

//

export const Text = styled(Custom)`
  padding: 1.5rem 2rem;
  width: 100%;
`

export const Icon = styled(Custom)<ICustomBlurComponent>`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  // Blur
  background: ${({ opacity = 1, ...props }) =>
    rgba(getBackgroundColor(props), opacity)} !important;
  backdrop-filter: blur(${({ blur = '0px' }) => blur});
`

export const Button = {
  Base,
  Text,
  Icon
}
