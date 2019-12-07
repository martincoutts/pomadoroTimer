import React from "react";

const PauseButton = props => {
  return (
    <button className="button" id="button__pause" onClick={props.timerPause}>
      Pause
    </button>
  );
};

export default PauseButton;
