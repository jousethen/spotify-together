import React, { Component } from 'react'
import { connect } from "react-redux";
class Room extends Component {

  render() {
    return (
      <div className="room">
        Here
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
