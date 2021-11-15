import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPlayingTrack } from '../actions/playback';
import { Spinner } from 'react-bootstrap';
import SongInfo from './SongInfo'
class Room extends Component {
  constructor() {
    super();
    this.state = {
      start: Date.now(),
      currentPosition: 0,
      currentTrack: {},
    }
    this.timer = null;
    this.tick = () => {
      this.setState({
        currentPosition: Date.now() - this.state.start + (this.props.position || 0)
      });
    };
  }

  componentDidMount() {
    this.props.fetchPlayingTrack(this.props.room.hostToken);
  }

  render() {
    if (Boolean(this.props.currentTrack.album)) {
      return (
        <SongInfo currentTrack={this.props.currentTrack} />
      )
    }
    else {
      return <div />
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
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Room)
