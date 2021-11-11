
import React from 'react';
import { Image } from 'react-bootstrap';

const Header = (props) =>
  <header>
    <Image className="logo" src="./images/spotify-2-logo-png-transparent.png" roundedCircle width={50} />
    <h3 className="title">Spotify Together</h3>
  </header>
export default Header;
