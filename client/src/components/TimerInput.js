import React from "react";

const TimerInput = props => {
  return (
    <input
      id="timeSelector"
      className="timer timer__input"
      type="number"
      min="1"
      max="60"
      value={props.timeInMinutes}
      onChange={props.handleTimeSelectChange}
    ></input>
  );
};

export default TimerInput;
