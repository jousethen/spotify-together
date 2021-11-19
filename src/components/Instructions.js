
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Header from './Header';
const Instructions = (props) =>
  <div className="App">
    <Header />
    <h3 className="title">Instructions for Host</h3>
    <ol>
      <li>Log in. If you have trouble, click the X on the top left of the screen to clear your cache and attempt to log in again</li>
      <li>Make sure your Spotify is currently playing music</li>
      <li>Click on "Create Room"</li>
      <li>Share the code shown with your friends! (Or enemies)</li>
    </ol>

    <h3 className="title">Instructions for Listener</h3>
    <ol>
      <li>Log in. If you have trouble, click the X on the top left of the screen to clear your cache and attempt to log in again</li>
      <li>Make sure you have a room code from the Host</li>
      <li>Fill out the space provided and press Enter</li>
      <li>Click on the 'Sync' button to listen along with the host</li>
    </ol>


    <p>Submit bug reports <a href="https://github.com/jousethen/spotify-together">here</a> (Although, I don't know who's going to use this at the moment.</p>
  </div>
export default Instructions;
