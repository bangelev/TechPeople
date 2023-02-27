import React from 'react'
import { Container, Row, Col } from '@nextui-org/react'
import Header from './Header'
import Footer from '../layout/Footer'

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
