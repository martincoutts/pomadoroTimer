import React, { Component } from "react";

import Timer from "./Timer";
import StartButton from "./StartButton";
import ClearButton from "./ClearButton";

export default class App extends Component {
  state = {
    // Sets default state of timer state
    timerStarted: false,
    // Default value in minutes
    timeInMinutes: 25,
    // Default value in seconds (25 * 60)
    timeInSeconds: 1500
  };

  timerStart = () => {
    this.setState(prevState => ({
      timerStarted: !prevState.timerStarted
    }));
  };

  handleTimeSelectChange = event => {
    this.setState({ timeInMinutes: event.target.value });
  };

  convertToSeconds = mins => {
    let seconds = mins * 60;
    this.setState({
      timeInSeconds: seconds
    });
  };

  render() {
    return (
      <div className="App">
        <Timer
          handleTimeSelectChange={this.handleTimeSelectChange}
          timerStatus={this.state.timerStarted}
          timeInMinutes={this.state.timeInMinutes}
          timeInSeconds={this.state.timeInSeconds}
        />
        <StartButton
          timerStart={this.timerStart}
          timerStatus={this.state.timerStarted}
          timeInMinutes={this.state.timeInMinutes}
          convertToSeconds={this.convertToSeconds}
        />
        <ClearButton />
      </div>
    );
  }
}
