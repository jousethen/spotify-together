
import React from 'react';
import { Image, CloseButton, Navbar, Container, Nav } from 'react-bootstrap';

const Header = (props) =>
  <header>
    <Navbar bg="black" variant="dark" expand="true">
      <Navbar.Brand href="/"><Image className="logo" src="./images/spotify-2-logo-png-transparent.png" roundedCircle />  Spotify Together</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/instructions">Instructions</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>


    <CloseButton id="close" variant="white" onClick={(event) => { props.logout() }} />
  </header>
export default Header;
