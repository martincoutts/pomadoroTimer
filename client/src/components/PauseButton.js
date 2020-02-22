import React from "react";
import { Button } from "antd";

const PauseButton = props => {
  const BEM_BASE = "start-pause-button";
  return (
    <Button
      className={`${BEM_BASE} ${BEM_BASE}--button__pause`}
      onClick={props.timerPause}
    >
      Pause
    </Button>
  );
};

export default PauseButton;
