import React from 'react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css' // if using the included styles


const Test = props => {
  var client_id = '8211b083dda34f61a2f0dd2d8f4d70f6'; // Your client id
  var client_secret = '2a24c1a3896141a0b1a09304b7f1a550'; // Your secret
  var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri






  return (
    <div>
      test
      <SpotifyAuth
        redirectUri='http://localhost:3000/callback'
        clientID='8211b083dda34f61a2f0dd2d8f4d70f6'
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
      />
    </div>
  );
};

export default Test;