import type { AppProps } from 'next/app'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../styles/theme';

const GlobalStyles =  createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
        color: #e9e9e9;
    }
    #root{
        margin:0 auto;
    }
`

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, useTheme] = useState('light')
  const toggleTheme = () => {
    theme == 'light' ? useTheme('dark') : useTheme('light')
  }
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
