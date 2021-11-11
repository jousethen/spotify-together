import React, { Component } from 'react'
import { connect } from "react-redux";
import { Button, Image, ButtonGroup } from "react-bootstrap"

class RoomsContainer extends Component {

  render() {

    return (
      <>
        <ButtonGroup vertical className="center" >
          <Button variant="outline-light">Create Room</Button>
          <Button variant="outline-light">Join Room</Button>
        </ButtonGroup>
      </>
    )
  }
}


export default connect()(RoomsContainer)
