import React, { Component } from "react";

import Timer from "./Timer";
import StartButton from "./StartButton";
import ClearButton from "./ClearButton";

export default class App extends Component {
  state = {
    timerStarted: false
  };

  timerStart = () => {
    console.log("Timer Started");
    this.setState(prevState => ({
      timerStarted: !prevState.timerStarted
    }));
  };

  render() {
    return (
      <div className="App">
        <Timer />
        <StartButton
          timerStart={this.timerStart}
          timerStatus={this.state.timerStarted}
        />
        <ClearButton />
      </div>
    );
  }
}
