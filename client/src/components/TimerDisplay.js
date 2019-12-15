import React from "react";

const TimerDisplay = props => {
  return (
    <span className="timer timer__span">{`${props.minutes}:${props.seconds}`}</span>
  );
};

export default TimerDisplay;
