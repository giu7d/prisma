import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size:  2rem;
  }
  
  :root {
    font-size:  ${({ theme }) => `${theme.font.size}px`};
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.foreground.base};
    background-color: ${({ theme }) => theme.colors.background.base};
  }
`
