import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div id="timer">
        {this.props.timerStatus === false ? (
          <input
            id="timeSelector"
            type="number"
            min="1"
            max="60"
            defaultValue="25"
            onChange={this.props.handleTimeSelectChange}
          ></input>
        ) : (
          <span>{this.props.time}</span>
        )}
      </div>
    );
  }
}
