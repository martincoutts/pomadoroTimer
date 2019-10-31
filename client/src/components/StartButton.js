import React, { Component } from "react";

export default class StartButton extends Component {
  render() {
    return (
      <div id="start-button">
        <button
          onClick={event => {
            this.props.timerStart();
            this.props.convertToSeconds(this.props.timeInMinutes);
          }}
        >
          {this.props.timerStatus === false ? "Start" : "Pause"}
        </button>
      </div>
    );
  }
}
