import React from 'react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css' // if using the included styles


const Test = props => {
  const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret

  return (
    <div>
      test
      <SpotifyAuth
        redirectUri={process.env.REACT_APP_REDIRECTURI}
        clientID={process.env.REACT_APP_CLIENT_ID}
        scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
      />
    </div>
  );
};

export default Test;
