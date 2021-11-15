import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
// import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import { fetchUser } from './actions/user'
import RoomsContainer from './containers/RoomsContainer';
import Header from './components/Header';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router';

class App extends Component {

  constructor() {
    super();
    this.state = {
      time: 0
    }
  }
  create_or_find_user = (token) => {
    //Retrieve User Information from Spotify
    fetchUser(token);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECTURI;
    let date = new Date(this.state.time)
    let exp = new Date(localStorage.getItem("tokenExp"))
    return (
      < div className="App" >

        <Header />
        <Outlet />

        {Boolean(date < exp) ? //Check to see if the user is logged in and token is valid
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
