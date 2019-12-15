import React, { Component } from "react";

import TimerInput from "./TimerInput";
import TimerDisplay from "./TimerDisplay";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ClearButton from "./ClearButton";

let timerInterval;

export default class App extends Component {
  state = {
    // Sets default state of timer state
    timerActive: false,
    timerCycleActive: false,
    // Default value in minutes and seconds
    minutes: 25,
    seconds: 60,
    // Default value in seconds (25 * 60)
    timeInSeconds: 1500,
    timer: "",
    timerCycleCount: 0
  };

  timerStart = () => {
    this.setState(prevState => ({
      timerActive: !prevState.timerActive
    }));
  };

  handleTimeSelectChange = event => {
    if (
      parseInt(event.target.value) > 0 &&
      parseInt(event.target.value) <= 60
    ) {
      this.setState({ minutes: parseInt(event.target.value) });
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

  timer = () => {
    this.setState({
      timerCycleActive: true
    });

    // Makes sure that when start button is clicked the first second shows the input value before the interval kicks in
    this.setState({
      seconds: 60
    });
    // Has to be called seperatley to seconds due to the timeout, makes sure the initial minutes show before changing to the current minute after 1 second
    setTimeout(() => {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1
      }));
    }, 1000);

    // Also named function so that interval can be referenced in other functions
    // This then takes over altering the timer value every second
    timerInterval = setInterval(() => {
      // If the time in seconds is more than 0 and the timer has been started
      // Remove a second from the seconds and time in seconds every second
      if (this.state.timeInSeconds > 0 && this.state.timerActive) {
        this.setState(prevState => ({
          timeInSeconds: prevState.timeInSeconds - 1,
          seconds: prevState.seconds - 1
        }));
        // If the seconds = 0 change them back to 60 to start a new minute
        // Also take one minute from minutes state
        if (this.state.seconds === 0 && this.state.minutes > 0) {
          this.setState(prevState => ({
            seconds: 60,
            minutes: prevState.minutes - 1
          }));
        }
      } else if (this.state.timeInSeconds === 0) {
        // Timer ends it calls the reset however must also add to the timerCycleCount as this is a completed cycle
        this.setState(prevState => ({
          timerCycleCount: prevState.timerCycleCount + 1
        }));
        this.timerReset();
      }
      // Change to 6000 when using minutes
    }, 1000);
  };

  // Alters timerActive state to show start button and then clears interval.
  // Means that when start button is clicked the a new interval is created but with the existing state
  timerPause = () => {
    this.setState(prevState => ({
      timerActive: !prevState.timerActive
    }));
    clearInterval(timerInterval);
  };

  // Clears global variable at top of page
  // Resets default state
  timerReset = () => {
    clearInterval(timerInterval);

    this.setState({
      timerCycleActive: false,
      timerActive: false,
      minutes: 25,
      seconds: 0,
      timeInSeconds: 1500
    });
  };

  render() {
    return (
      <div className="App">
        <div id="timer">
          {/* Conditional rendering based on timerActive state */}
          {this.state.timerActive === false ? (
            <TimerInput
              handleTimeSelectChange={this.handleTimeSelectChange}
              timerStatus={this.state.timerActive}
              minutes={this.state.minutes}
              seconds={this.state.seconds}
              timeInSeconds={this.state.timeInSeconds}
              updateTimer={this.updateTimer}
            />
          ) : (
            <TimerDisplay
              timer={this.state.timer}
              minutes={this.state.minutes}
              seconds={this.state.seconds}
            />
          )}
        </div>

        {/* Conditional rendering based on timerActive state */}
        {this.state.timerActive === false ? (
          <StartButton
            timerStart={this.timerStart}
            timerStatus={this.state.timerActive}
            minutes={this.state.minutes}
            convertToSeconds={this.convertToSeconds}
            timer={this.timer}
          />
        ) : (
          <PauseButton timerPause={this.timerPause} />
        )}

        <ClearButton timerReset={this.timerReset} />
      </div>
    );
  }
}
