import React from "react";
import { InputNumber } from "antd";

const TimerInput = props => {
  const BEM_BASE = "timer-input";
  return (
    <InputNumber
      id="timeSelector"
      className={`${BEM_BASE} ${BEM_BASE}--input`}
      min="1"
      max="60"
      value={props.minutes}
      onChange={props.handleTimeSelectChange}
      size="large"
    />
  );
};

export default TimerInput;
