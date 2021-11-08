import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

class App extends Component {


  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECTURI;

    return (
      < div className="App" >
        {
          Boolean(Cookies.get("spotifyAuthToken"))
            ? <div>You are logged in</div> :
            <div className="Login">
              <Image src="./images/spotify-2-logo-png-transparent.png" roundedCircle width={100} />
              <br />
              <br />
              <SpotifyAuth
                title="Continue With Spotify"
                redirectUri={redirectUri}
                noLogo={true}
                clientID={client_id}
                scopes={[Scopes.userReadPrivate, 'user-read-email', 'streaming', 'user-read-playback-state', 'user-modify-playback-state']} // either style will work
                onAccessToken={(token) => Cookies.set("", token)}
              />
            </div>
        }
      </div >
    );
  }
}

export default App;
