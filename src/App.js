import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
// import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchUser } from './actions/user'
import RoomsContainer from './containers/RoomsContainer';
import Header from './components/Header';
import { Outlet, Navigate } from 'react-router';

class App extends Component {

  constructor() {
    super();
    this.state = {
      time: 0,
      tokenExp: Date.now() + 10000,
      redirect: false
    }
  }

  create_or_find_user = (token) => {
    //Retrieve User Information from Spotify
    fetchUser(token);

    //Store token expiration
    let dt = new Date();
    dt.setHours(dt.getHours() + 1);

    this.setState({
      tokenExp: dt.getTime(),
      redirect: true
    })



  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  logout = (event) => {
    localStorage.removeItem("spotifyAuthToken");
    localStorage.removeItem("spotifyUser");

  }

  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECTURI;

    // console.log(Boolean(this.state.time < this.state.tokenExp), localStorage.getItem("spotifyAuthToken"), this.state.time, this.state.tokenExp)

    return (
      < div className="App" >
        {this.state.redirect}
        <Header logout={this.logout} />
        <Outlet />

        {Boolean(this.state.time < this.state.tokenExp) && Boolean(localStorage.getItem("spotifyAuthToken")) ? //Check to see if the user is logged in and token is valid
          <>
            <RoomsContainer />
          </>
          :
          <div className="Login">
            <br />
            <br />
            <SpotifyAuth
              title="Continue With Spotify"
              redirectUri={redirectUri}
              noLogo={true}
              localStorage
              noCookie={true}
              clientID={client_id}
              scopes={[Scopes.userReadPrivate, 'user-read-email', 'user-read-playback-state', 'user-modify-playback-state']} // either style will work
              onAccessToken={(token) => {
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
