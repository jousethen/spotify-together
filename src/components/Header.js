
import React from 'react';
import { Image, CloseButton, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

const Header = (props) =>
  <header>
    <Navbar bg="black" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/"><Image className="logo" src="./images/spotify-2-logo-png-transparent.png" roundedCircle />Spotify Together</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <CloseButton id="close" variant="white" onClick={(event) => { props.logout() }} />
  </header>
export default Header;
