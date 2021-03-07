import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { Theme } from '../themes'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
