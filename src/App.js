import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css';
import React, { Component } from "react";
// import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchUser } from './actions/user'
import RoomsContainer from './containers/RoomsContainer';
import Header from './components/Header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      time: 0,
      tokenExp: Date.now() + 10000,
    }
  }

  create_or_find_user = (token) => {
    //Retrieve User Information from Spotify
    fetchUser(token);

    //Store token expiration
    let dt = new Date();
    dt.setHours(dt.getHours() + 1);
    console.log(dt)
    this.setState({
      tokenExp: dt.getTime()
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
    //console.log(Boolean(this.state.time < this.state.tokenExp), localStorage.getItem("spotifyAuthToken"), time, exp)

    return (
      < div className="App" >
        <Header logout={this.logout} />

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
              noCookie={true}
              clientID={client_id}
              className="center"
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
