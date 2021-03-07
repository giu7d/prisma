import { lighten, darken } from 'polished'

// Themes
export const generateTheme = theme => {
  const generatedTheme = {
    ...theme,
    colors: {}
  }

  Object.keys(theme.colors).forEach(key => {
    const color = theme.colors[key]

    generatedTheme.colors[key] = {
      lighter: lighten(0.2, color),
      light: lighten(0.1, color),
      base: color,
      dark: darken(0.1, color),
      darker: darken(0.2, color)
    }
  })

  return generatedTheme
}

// Styles
export const getBackgroundColor = props =>
  props.background || props.theme.colors.primary.light

export const getColor = props =>
  props.color || props.theme.colors.foreground.base

export const getRoundness = ({ roundness = '4rem' }) => roundness
