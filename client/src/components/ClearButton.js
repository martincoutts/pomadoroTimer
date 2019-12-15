import React, { Component } from "react";

export default class ClearButton extends Component {
  render() {
    return (
      <div id="clear-button">
        <button onClick={this.props.timerReset}>Clear</button>
      </div>
    );
  }
}
