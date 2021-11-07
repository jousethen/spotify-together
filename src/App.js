import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from 'js-cookie';

class App extends Component {


  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECTURI;
    console.log(Cookies.get())
    return (
      < div className="App" >
        <SpotifyAuth
          redirectUri={redirectUri}
          clientID={client_id}
          scopes={[Scopes.userReadPrivate, 'user-read-email', 'streaming', 'user-read-playback-state', 'user-modify-playback-state']} // either style will work
          onAccessToken={(token) => Cookies.set("spotifyAuthToken", token)}
        />
      </div >
    );
  }
}

export default App;
