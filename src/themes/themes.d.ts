import { DefaultTheme } from './index'

type IThemeColors = {
  [Key in keyof typeof DefaultTheme.colors]: {
    lighter: string
    light: string
    base: string
    dark: string
    darker: string
  }
}

type ITheme = typeof DefaultTheme & { colors: IThemeColors }
