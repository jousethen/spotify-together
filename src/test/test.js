import React from 'react';
import Cookies from 'js-cookie';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import WebPlayback from './WebPlayback';
const Test = props => {
  const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECTURI;
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))

  // fetch('https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj', {
  //   method: 'GET', headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + token
  //   }
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     console.log(json)
  //   });
  return (
    <div className='app'>
      <SpotifyAuth
        redirectUri={redirectUri}
        clientID={client_id}
        scopes={[Scopes.userReadPrivate, 'user-read-email', 'streaming', 'user-read-playback-state', 'user-modify-playback-state']} // either style will work
        onAccessToken={(token) => setToken(token)}
      />
      <WebPlayback token={token} />

    </div>
  );
};

export default Test;
