import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPlayingTrack } from '../actions/playback';
import SongInfo from './SongInfo'
class Room extends React.PureComponent {
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
        currentPosition: Date.now() - this.state.start + (this.props.currentTrack.progress_ms || 0)
      });
    };
  }

  componentDidUpdate(props) {
    if (this.state.currentPosition >= this.props.currentTrack.duration_ms) {
      this.setState({
        start: Date.now(),
        currentPosition: 0,
        currentTrack: {},
      });
      this.props.fetchPlayingTrack(this.props.room.hostToken);
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 300);
    console.log(this.timer)
    this.props.fetchPlayingTrack(this.props.room.hostToken);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log(this.state.currentPosition, this.props.currentTrack.duration_ms)
    const percentage = +(this.state.currentPosition * 100 / this.props.currentTrack.duration_ms).toFixed(2);
    if (Boolean(this.props.currentTrack.album)) {
      return (
        <SongInfo currentTrack={this.props.currentTrack} percentage={percentage} />
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
