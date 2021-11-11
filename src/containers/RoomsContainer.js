import React, { Component } from 'react'
import { connect } from "react-redux";

class RoomsContainer extends Component {

  render() {

    return (
      <div>
        Create Room Button
        Find Room Butotn
      </div>
    )
  }
}


export default connect()(RoomsContainer)
