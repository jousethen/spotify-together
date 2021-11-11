import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
// import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { fetchUser } from './utility/spotifyApi'

class App extends Component {

  create_or_find_user = (token) => {
    //Retrieve User Information from Spotify
    console.log(token)
    let user = fetchUser(token);
  }

  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECTURI;
    this.create_or_find_user(localStorage.getItem("spotifyAuthToken"));
    return (
      < div className="App" >
        {
          Boolean(localStorage.getItem("spotifyAuthToken"))
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
                scopes={[Scopes.userReadPrivate, 'user-read-email', 'user-read-playback-state', 'user-modify-playback-state']} // either style will work
                onAccessToken={(token) => {
                  localStorage.setItem("spotifyAuthToken", token);
                  this.create_or_find_user(token);
                }
                }
              />
            </div>
        }
      </div >
    );
  }
}

export default App;
