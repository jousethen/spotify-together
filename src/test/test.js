import React from 'react';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css' // if using the included styles


const Test = props => {
<<<<<<< HEAD
  const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
=======
  var client_id = ''; // Your client id
  var client_secret = ''; // Your secret
  var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri


>>>>>>> b3deb4e2a53acfbb7d57835721ef0afa9bbfa018




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
