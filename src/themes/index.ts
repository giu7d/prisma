import { generateTheme } from '../utils'

export const DefaultTheme = {
  colors: {
    primary: '#F5347C',
    secondary: '#9D3BE0',
    success: '#22D8B7',
    warn: '#F7921E',
    background: '#000',
    foreground: '#FFF'
  },
  font: {
    size: 12,
    family: {
      highlight: '"Montserrat", Helvetica, sans-serif',
      default: '"OpenSans-Regular", Helvetica, sans-serif'
    }
  }
}

export const Theme = generateTheme(DefaultTheme)
