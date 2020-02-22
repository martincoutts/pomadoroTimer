import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const TimerDisplay = props => {
  const BEM_BASE = "timer-display";
  let minutesText;
  let secondsText;

  // Conditional rendering of text to eliminate formatting issues
  if (props.seconds === 60) {
    secondsText = "00";
  } else if (props.seconds < 10) {
    secondsText = `0${props.seconds}`;
  } else {
    secondsText = props.seconds;
  }

  if (props.minutes < 10 && props.minutes > 0) {
    minutesText = `0${props.minutes}`;
  } else if (props.minutes === 0) {
    minutesText = "00";
  } else {
    minutesText = props.minutes;
  }

  return (
    <CircularProgressbar
      value={props.timeDecimal}
      text={`${minutesText}:${secondsText}`}
      maxValue={props.selectedValue}
      minValue={0}
    />
  );
};

export default TimerDisplay;
