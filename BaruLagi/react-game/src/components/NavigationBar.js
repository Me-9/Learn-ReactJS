import { Navbar, Nav, Container } from "react-bootstrap";
import React from 'react';

export const NavigationBar = () => {
  return (
    <div>
         <Navbar>
            <Container>
                <Navbar.Brand href="/">GameHolic</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#Best5star">BEST 5 STAR CHARACTER</Nav.Link>
                    <Nav.Link href="#Best4star">BEST 4 STAR CHARACTER</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}