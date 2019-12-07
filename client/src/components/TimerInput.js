import React, { Component } from "react";

export default class Timer extends Component {
  testFunctionTrigger = () => {
    console.log("testFunctionTrigger");
  };

  render() {
    return (
      <div id="timer">
        {this.props.timerStatus === false ? (
          <input
            id="timeSelector"
            className="timer timer__input"
            type="number"
            min="1"
            max="60"
            defaultValue={this.props.timeInMinutes}
            onChange={this.props.handleTimeSelectChange}
          ></input>
        ) : (
          <span className="timer timer__span">{this.props.timer}</span>
        )}
      </div>
    );
  }
}
