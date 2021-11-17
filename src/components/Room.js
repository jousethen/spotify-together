import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPlayingTrack } from '../actions/playback';
import { deleteRoom } from '../actions/rooms';
import SongInfo from './SongInfo'
import { Spinner, Button } from 'react-bootstrap';
class Room extends Component {
  constructor() {
    super();
    this.state = {
      start: Date.now(),
      currentPosition: 0,
      currentTrack: {},
      isHost: true
    }
    this.timer = null;
    this.tick = () => {
      this.setState({
        currentPosition: Date.now() - this.state.start + (this.props.currentTrack.progress_ms || 0)
      });
    };


  }

  componentDidUpdate(props) {
    //Update SongInfo when Song Ends
    if (this.state.currentPosition >= this.props.currentTrack.duration_ms + 2000) {
      this.setState({
        start: Date.now(),
        currentPosition: 0,
        currentTrack: {},
      });
      this.props.fetchPlayingTrack(this.props.room.hostToken);
    }
  }

  componentDidMount() {
    //Initialize timer for "Now Playing" progress bar
    this.timer = setInterval(this.tick, 300);

    //Check to see if the user is this room's host
    if (this.props.room.host.spotify_id !== localStorage.getItem("spotifyUser")) {
      this.setState({
        isHost: false
      })
    }

    //Fetch Host's playing song
    this.props.fetchPlayingTrack(this.props.room.hostToken);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  closeRoom = () => {
    this.props.deleteRoom(this.props.room.roomKey)
  }

  refresh = () => {
    this.setState({
      start: Date.now(),
      currentPosition: 0
    })
    this.props.fetchPlayingTrack(this.props.room.hostToken);
  }

  render() {
    const percentage = +(this.state.currentPosition * 100 / this.props.currentTrack.duration_ms).toFixed(2);

    // Only render if currentTrack information is available
    if (Boolean(this.props.currentTrack.album)) {
      return (
        <>
          <SongInfo
            currentTrack={this.props.currentTrack}
            percentage={percentage}
            room={this.props.room}
            closeRoom={this.closeRoom}
            isHost={this.state.isHost} />
          <Button onClick={(event) => { this.refresh() }} variant="outline-success">Refresh</Button>
        </>
      )

    }
    else {
      return <Button onClick={(event) => { this.refresh() }} variant="outline-success">Refresh</Button>
    }


  }
}

const mapStateToProps = (state) => {
  return {
    currentTrack: state.playback.track,
    trackLoading: state.playback.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayingTrack: (hostToken) => dispatch(fetchPlayingTrack(hostToken)),
    deleteRoom: (roomKey) => dispatch(deleteRoom(roomKey))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Room)
