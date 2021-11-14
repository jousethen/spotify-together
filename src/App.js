import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
// import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { fetchUser } from './utility/spotifyApi'
import RoomsContainer from './containers/RoomsContainer';
import Header from './components/Header';
import Cookies from 'js-cookie';

class App extends Component {

  create_or_find_user = (token) => {
    //Retrieve User Information from Spotify
    fetchUser(token);
    window.location.href = process.env.REACT_APP_HOST;
  }

  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECTURI;

    return (
      < div className="App" >
        <Header />

        {Boolean(Cookies.get('spotifyAuthToken')) ? //Check to see if the user is logged in. 
          <><RoomsContainer /></>
          :
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
              onAccessToken={(token) => { this.create_or_find_user(token); }
              }
            />
          </div>
        }
      </div >
    );
  }
}

export default App;
