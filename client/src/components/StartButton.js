import React from "react";
import { Button } from "antd";

const StartButton = props => {
  const BEM_BASE = "start-pause-button";
  return (
    <Button
      className={`${BEM_BASE} ${BEM_BASE}--button__start`}
      onClick={() => {
        props.timerStart();
        props.convertToSeconds(props.minutes);
        props.timer();
      }}
    >
      Start
    </Button>
  );
};

export default StartButton;
