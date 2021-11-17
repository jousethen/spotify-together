
import React from 'react';
import { Image, CloseButton } from 'react-bootstrap';

const Header = (props) =>
  <header>
    <Image className="logo" src="./images/spotify-2-logo-png-transparent.png" roundedCircle width={50} />
    <h3 className="title">Spotify Together</h3>
    <CloseButton id="close" variant="white" onClick={(event) => { props.logout() }} />
  </header>
export default Header;
