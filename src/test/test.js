import React from 'react';

import 'react-spotify-auth/dist/index.css';

const Test = props => {
  //const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;

  //const redirectUri = process.env.REACT_APP_REDIRECTURI;
  // const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"))

  // fetch('https://api.spotify.com/v1/me/player/play', {
  //   method: 'PUT', headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + token
  //   },
  //   body: JSON.stringify({
  //     "context_uri": "spotify:album:41YN39HCgC9BLrvwOkV4uj",
  //     "offset": {
  //       "position": 0
  //     },
  //     "position_ms": 65333
  //   })
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     console.log(json)
  //   });

  const request = require('request'); // "Request" library

  // your application requests authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

      // use the access token to access the Spotify Web API
      console.log(body.access_token)
    }
  });
  return (
    <div className='app'>


    </div>
  );
};

export default Test;
