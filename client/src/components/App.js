import React, { Component } from "react";

import TimerInput from "./TimerInput";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ClearButton from "./ClearButton";

let timerInterval;

export default class App extends Component {
  state = {
    // Sets default state of timer state
    timerStarted: false,
    timerCycleActive: false,
    // Default value in minutes
    timeInMinutes: 25,
    // Default value in seconds (25 * 60)
    timeInSeconds: 1500,
    timer: "",
    timerCycleCount: 0
  };

  timerStart = () => {
    this.setState(prevState => ({
      timerStarted: !prevState.timerStarted
    }));
  };

  handleTimeSelectChange = event => {
    if (
      parseInt(event.target.value) > 0 &&
      parseInt(event.target.value) <= 60
    ) {
      this.setState({ timeInMinutes: parseInt(event.target.value) });
    } else {
      alert("Please select a value between 1 and 60");
    }
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

    // Makes sure that when start button is clicked the first second shows the input value before the interval kicks in
    this.setState({
      timer: minutes
    });

    // This then takes over altering the timer value every second
    timerInterval = setInterval(() => {
      if (minutes > 0 && this.state.timerStarted) {
        minutes = minutes - 1;
        this.setState({
          timeInMinutes: minutes,
          timer: minutes
        });
      } else if (this.state.timer === 0) {
        // Timer ends it calls the reset however must also add to the timerCycleCount as this is a completed cycle
        this.setState(prevState => ({
          timerCycleCount: prevState.timerCycleCount + 1
        }));
        this.timerReset();
      }
      // Change to 6000 when using minutes
    }, 1000);
  };

  // Alters timerStarted state to show start button and then clears interval.
  // Means that when start button is clicked the a new interval is created but with the existing state
  timerPause = () => {
    this.setState(prevState => ({
      timerStarted: !prevState.timerStarted
    }));
    clearInterval(timerInterval);
  };

  // Clears global variable at top of page
  // Resets default state
  timerReset = () => {
    clearInterval(timerInterval);
    this.setState({
      timerCycleActive: false,
      timerStarted: false,
      timeInMinutes: 25,
      timer: ""
    });
  };

  render() {
    return (
      <div className="App">
        <TimerInput
          handleTimeSelectChange={this.handleTimeSelectChange}
          timerStatus={this.state.timerStarted}
          timeInMinutes={this.state.timeInMinutes}
          timeInSeconds={this.state.timeInSeconds}
          timer={this.state.timer}
          updateTimer={this.updateTimer}
        />
        {/* Conditional rendering based on timerStarted state */}
        {this.state.timerStarted === false ? (
          <StartButton
            timerStart={this.timerStart}
            timerStatus={this.state.timerStarted}
            timeInMinutes={this.state.timeInMinutes}
            convertToSeconds={this.convertToSeconds}
            timer={this.timer}
          />
        ) : (
          <PauseButton timerPause={this.timerPause} />
        )}

        <ClearButton
          timerReset={this.timerReset}
          updateTimer={this.handleUpdateTimer}
          functionTrigger={this.functionTrigger}
        />
      </div>
    );
  }
}
