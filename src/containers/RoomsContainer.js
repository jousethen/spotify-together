import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap"
import { createRoom } from "../actions/rooms"
import Cookies from "js-cookie";
import Room from '../components/Room';
class RoomsContainer extends Component {

  handleOnCreateButton = event => {
    this.props.createRoom(Cookies.get("spotifyAuthToken"));
  }


  render() {
    return (
      <div className="room_container">
        {this.props.room ?
          <Room room={this.props.room} /> :
          <ButtonGroup vertical className="center" >
            <Button onClick={() => { this.handleOnCreateButton() }} variant="outline-light">Create Room</Button>
            <Button variant="outline-light">Join Room</Button>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Join Room</InputGroup.Text>
              <FormControl
                placeholder="Room Key"
                aria-label="Room Key"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </ButtonGroup>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.room.room,
    loading: state.room.loading,
    host: state.room.host
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
