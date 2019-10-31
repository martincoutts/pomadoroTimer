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
            defaultValue={this.props.timeInMinutes}
            onChange={this.props.handleTimeSelectChange}
          ></input>
        ) : (
          <span>{this.props.timer}</span>
        )}
      </div>
    );
  }
}
