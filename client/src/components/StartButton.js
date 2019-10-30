import React, { Component } from "react";

export default class StartButton extends Component {
  render() {
    return (
      <div id="start-button">
        <button onClick={this.props.timerStart}>
          {this.props.timerStatus === false ? "Start" : "Pause"}
        </button>
      </div>
    );
  }
}
