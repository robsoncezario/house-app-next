import React from 'react'
import BottomNavbar from '../BottomNavbar'
import Header from '../Header'
import { Container } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <BottomNavbar />
    </>
  )
}

export default Layout
