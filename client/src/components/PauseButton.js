import React from "react";

const PauseButton = props => {
  const BEM_BASE = "start-pause-button";
  return (
    <button
      className={`${BEM_BASE} ${BEM_BASE}--button__pause`}
      onClick={props.timerPause}
    >
      Pause
    </button>
  );
};

export default PauseButton;
