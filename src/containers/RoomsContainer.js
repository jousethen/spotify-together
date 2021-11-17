import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap"
import { createRoom, findRoom } from "../actions/rooms"
import Cookies from "js-cookie";
import Room from '../components/Room';
class RoomsContainer extends Component {
  constructor() {
    super();
    this.state = {
      roomKeyText: ""
    }
  }

  handleOnCreateButton = event => {
    this.props.createRoom(Cookies.get("spotifyAuthToken"));
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.findRoom(this.state.roomKeyText);
  }

  onHandleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      roomKeyText: event.target.value
    })
  }

  render() {
    return (
      <div className="room_container">
        {this.props.room ?
          <Room room={this.props.room} /> :
          <ButtonGroup vertical className="center" >
            <Button onClick={() => { this.handleOnCreateButton() }} variant="outline-light">Create Room</Button>
            <br />
            <form onSubmit={(event) => { this.onHandleSubmit(event) }}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Join Room</InputGroup.Text>
                <FormControl
                  placeholder="Room Key"
                  aria-label="Room Key"
                  aria-describedby="basic-addon1"
                  onChange={(event) => { this.onHandleChange(event) }}
                />
              </InputGroup>
            </form>
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
    },

    findRoom: (roomKey) => {
      dispatch(findRoom(roomKey));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer)
