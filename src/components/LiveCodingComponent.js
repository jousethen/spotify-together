import React, { Component } from 'react';

import { InputGroup, FormControl } from "react-bootstrap";


class LiveCodingComponent extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }



  onHandleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div >
        <div>{this.state.text}</div>
        <form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <FormControl
              placeholder="Live Code"
              aria-label="Live"
              aria-describedby="basic-addon1"
              onChange={(event) => { this.onHandleChange(event) }}
            />
          </InputGroup>
        </form>
      </div>
    )
  }
}


export default LiveCodingComponent
