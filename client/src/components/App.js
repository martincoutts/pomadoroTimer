import React, { Component } from "react";

import Timer from "./Timer";
import StartButton from "./StartButton";
import ClearButton from "./ClearButton";

export default class App extends Component {
  state = {
    timerStarted: false,
    time: 25
  };

  timerStart = () => {
    console.log("Timer Started");
    this.setState(prevState => ({
      timerStarted: !prevState.timerStarted
    }));
  };

  handleTimeSelectChange = event => {
    this.setState({ time: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Timer handleTimeSelectChange={this.handleTimeSelectChange} />
        <StartButton
          timerStart={this.timerStart}
          timerStatus={this.state.timerStarted}
        />
        <ClearButton />
      </div>
    );
  }
}
