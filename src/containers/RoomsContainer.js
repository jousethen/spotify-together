import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, Image, ButtonGroup } from "react-bootstrap"
import { createRoom } from "../actions/rooms"
class RoomsContainer extends Component {

  handleOnCreateButton = event => {
    this.props.createRoom();
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

const mapDispatchToProps = (dispatch) => {
  return {
    createRoom: () => {
      dispatch(createRoom());
    }
  }
}


export default connect(null, mapDispatchToProps)(RoomsContainer)
