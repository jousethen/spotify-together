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
    let t = fetchPlayingTrack(this.props.room.hostToken)
    // this.setState({
    //   currentTrack: fetchPlayingTrack(this.props.room.hostToken)
    // })
    console.log(t)
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




export default connect(mapStateToProps)(Room)
