
import React from 'react';
import { Image, CloseButton, Navbar, Nav } from 'react-bootstrap';

const Header = (props) =>
  <header>
    <Navbar bg="black" variant="dark" expand="true">
      <Navbar.Brand href="/"><Image className="logo" src="./images/Spotify_Logo_RGB_Green.png" /></Navbar.Brand>
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
