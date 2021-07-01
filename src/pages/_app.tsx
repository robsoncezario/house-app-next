import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider,StylesProvider } from "@material-ui/core/styles";

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Layout from '../components/Layout'

const App = ({ Component, pageProps } : AppProps) => {
  return (
    <StylesProvider injectFirst> 
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>

          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

App.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  
  return { pageProps }
}

export default App
