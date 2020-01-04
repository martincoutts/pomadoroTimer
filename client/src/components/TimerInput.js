import React from "react";

const TimerInput = props => {
  const BEM_BASE = "timer-input";
  return (
    <input
      id="timeSelector"
      className={`${BEM_BASE} ${BEM_BASE}--input`}
      type="number"
      min="1"
      max="60"
      value={props.minutes}
      onChange={props.handleTimeSelectChange}
    ></input>
  );
};

export default TimerInput;
