import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    // Sets default value to match element default value
    time: 25
  };

  render() {
    return (
      <div id="timer">
        <input
          id="timeSelector"
          type="number"
          min="1"
          max="60"
          defaultValue="25"
          onChange={this.props.handleTimeSelectChange}
        ></input>
      </div>
    );
  }
}
