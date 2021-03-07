import 'styled-components'
import { ITheme } from '../themes/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

export interface ICustomComponent {
  background?: string
  color?: string
  roundness?: string
}

export interface ICustomBlurComponent extends ICustomComponent {
  opacity?: number
  blur?: string
}
