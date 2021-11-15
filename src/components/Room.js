import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchPlayingTrack } from '../actions/playback';

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
    return (
      <div className="room">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room.room,
    loading: state.room.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayingTrack: (hostToken) => dispatch(fetchPlayingTrack(hostToken)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Room)
