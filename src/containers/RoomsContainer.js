import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, ButtonGroup } from "react-bootstrap"
import { createRoom } from "../actions/rooms"
import Cookies from "js-cookie";
class RoomsContainer extends Component {

  handleOnCreateButton = event => {
    this.props.createRoom(Cookies.get("spotifyAuthToken"));
  }

  render() {
    return (
      <div className="room_container">
        <ButtonGroup vertical className="center" >
          <Button onClick={() => { this.handleOnCreateButton() }} variant="outline-light">Create Room</Button>
          <Button variant="outline-light">Join Room</Button>
        </ButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoom: (hostToken) => {
      dispatch(createRoom(hostToken));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)
