
import React from 'react';
import Header from './Header';

const About = (props) =>
  <div className="App">
    <Header />
    <h3 className="title">About</h3>
    <p>Spotify Together is a web app meant to synchronize the Spotify players of several users. The end goal of this project is to integrate with Twitch Extension panels.</p>
    <p>Submit bug reports <a href="https://github.com/jousethen/spotify-together">here</a> (Although, I don't know who's going to use this at the moment.</p>
  </div>
export default About;
