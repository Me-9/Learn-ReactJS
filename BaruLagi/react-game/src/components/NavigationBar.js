import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
                <Navbar.Brand href="/">GameHolic</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING GAME</Nav.Link>
                    <Nav.Link href="#best">BEST GAME</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar;