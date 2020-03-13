import React, { Component } from "react";

import Header from "./Header";
import TimerInput from "./TimerInput";
import TimerDisplay from "./TimerDisplay";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ClearButton from "./ClearButton";
import InfoDisplay from "./InfoDisplay";

let timerInterval;

export default class App extends Component {
  state = {
    date: "",

    // Sets default state of timer state
    timerActive: false,
    timerCycleActive: false,
    // Default value in minutes and seconds
    minutes: 25,
    seconds: 60,
    selectedValue: 25,
    timeDecimal: 25.0,
    // Default value in seconds (25 * 60)
    timeInSeconds: 1500,
    timerCycleCount: 0,
    isDueBreak: false,
    studyPeriods: 0,
    breaksTaken: 0
  };

  componentDidMount() {
    this.getDate();
  }

  getDate() {
    var date = new Date();

    this.setState({
      date: date
    });
  }

  timerStart = () => {
    this.setState(prevState => ({
      timerActive: !prevState.timerActive
    }));
  };

  handleTimeSelectChange = event => {
    if (parseInt(event) > 0 && parseInt(event) <= 60) {
      this.setState({
        minutes: parseInt(event),
        selectedValue: parseInt(event)
      });
    } else {
      alert("Please select a value between 1 and 60");
    }
  };

  findTimePercentage = () => {
    const mins = this.state.minutes;
    let seconds = this.state.seconds;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    const decimal = parseFloat(`${mins}.${seconds}`);
    this.setState({ timeDecimal: decimal });
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
        this.findTimePercentage();
      } else if (this.state.timeInSeconds === 0) {
        // Timer ends it calls the reset however must also add to the timerCycleCount as this is a completed cycle
        this.setState(prevState => ({
          timerCycleCount: prevState.timerCycleCount + 1,
          isDueBreak: !prevState.isDueBreak
        }));

        this.state.isDueBreak
          ? this.setState(prevState => ({
              studyPeriods: prevState.studyPeriods + 1
            }))
          : this.setState(prevState => ({
              breaksTaken: prevState.breaksTaken + 1
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

    if (this.state.isDueBreak) {
      // Checks for every 5th cycle count and if so sets larger break time else just the normal break
      this.state.timerCycleCount % 5 === 0
        ? this.setBreak(15)
        : this.setBreak(5);
    } else {
      this.setState({
        timerCycleActive: false,
        timerActive: false,
        minutes: 25,
        seconds: 0,
        timeInSeconds: 1500
      });
    }
  };

  setBreak = breakTime => {
    this.setState(prevState => ({
      minutes: breakTime,
      seconds: 0,
      timerCycleActive: false,
      timerActive: false
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="timer timer--container">
          <div className="timer-display timer-display--container">
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
                minutes={this.state.minutes}
                seconds={this.state.seconds}
                selectedValue={this.state.selectedValue}
                timeDecimal={this.state.timeDecimal}
                isDueBreak={this.state.isDueBreak}
              />
            )}
          </div>

          <div className="buttons buttons--container">
            <div className={`start-pause-button start-pause-button--container`}>
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
            </div>

            <ClearButton timerReset={this.timerReset} />
          </div>
        </div>

        <InfoDisplay
          date={this.state.date}
          studyPeriods={this.state.studyPeriods}
          breaksTaken={this.state.breaksTaken}
        />
      </div>
    );
  }
}
