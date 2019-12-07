import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <input
        id="timeSelector"
        className="timer timer__input"
        type="number"
        min="1"
        max="60"
        defaultValue={this.props.timeInMinutes}
        onChange={this.props.handleTimeSelectChange}
      ></input>
    );
  }
}
