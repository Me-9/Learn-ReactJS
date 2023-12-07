import { Navbar, Nav, Container } from "react-bootstrap";

import React from 'react'

const NavigationBar = () => {
  return (
    <div className="myBG">
      <Navbar variant="dark">
        <Container>
            <Navbar.Brand href="/">GENSHIN IMPACT</Navbar.Brand>
            <Nav>
                <Nav.Link href="#best5star">BEST 5 STAR CHARACTER</Nav.Link>
                <Nav.Link href="#best4star">BEST 4 STAR CHARACTER</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
