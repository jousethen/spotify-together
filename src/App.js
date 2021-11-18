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
import { Outlet } from 'react-router';
import { Button } from 'react-bootstrap'

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

    this.setState({
      tokenExp: dt.getTime(),

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

        <Header logout={this.logout} />
        <Outlet />

        {Boolean(this.state.time < this.state.tokenExp) && Boolean(localStorage.getItem("spotifyAuthToken")) ? //Check to see if the user is logged in and token is valid
          <>
            <RoomsContainer />
          </>
          :
          <div className="Login">
            <style type="text/css">{`.btn-Success {
                font-size: 15pt;
                width: 200pt;
                align-self: center;
                background: #2ebd59;
                border-color: #2ebd59;
              }`}
            </style>
            <Button variant="Success">Continue w/ Spotify</Button>
          </div>
        }
      </div >
    );
  }
}

export default App;
