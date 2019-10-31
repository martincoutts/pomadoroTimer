import React, { Component } from "react";

import Timer from "./Timer";
import StartButton from "./StartButton";
import ClearButton from "./ClearButton";

export default class App extends Component {
  state = {
    // Sets default state of timer state
    timerStarted: false,
    timerCycleActive: false,
    // Default value in minutes
    timeInMinutes: 25,
    // Default value in seconds (25 * 60)
    timeInSeconds: 1500,
    timer: "--"
  };

  timerStart = () => {
    this.setState(prevState => ({
      timerStarted: !prevState.timerStarted
    }));
  };

  handleTimeSelectChange = event => {
    this.setState({ timeInMinutes: parseInt(event.target.value) });
  };

  convertToSeconds = mins => {
    let seconds = mins * 60;
    this.setState({
      timeInSeconds: seconds
    });
  };

  timer = duration => {
    this.setState({
      timerCycleActive: true
    });
    let minutes = duration;
    setInterval(() => {
      if (minutes > 0 && this.state.timerStarted) {
        minutes = minutes - 1;
        this.setState({
          timeInMinutes: minutes,
          timer: minutes
        });
      }
      // Change to 6000 when using minutes
    }, 1000);
    if (minutes === 0) {
      this.setState({
        timerCycleActive: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Timer
          handleTimeSelectChange={this.handleTimeSelectChange}
          timerStatus={this.state.timerStarted}
          timeInMinutes={this.state.timeInMinutes}
          timeInSeconds={this.state.timeInSeconds}
          timer={this.state.timer}
        />
        <StartButton
          timerStart={this.timerStart}
          timerStatus={this.state.timerStarted}
          timeInMinutes={this.state.timeInMinutes}
          convertToSeconds={this.convertToSeconds}
          timer={this.timer}
        />
        <ClearButton />
      </div>
    );
  }
}
