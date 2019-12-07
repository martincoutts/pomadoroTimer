import React, { Component } from "react";

export default class StartButton extends Component {
  render() {
    return (
      <button
        id="button__start"
        onClick={() => {
          this.props.timerStart();
          this.props.convertToSeconds(this.props.timeInMinutes);
          this.props.timer(this.props.timeInMinutes);
        }}
      >
        Start
      </button>
    );
  }
}
