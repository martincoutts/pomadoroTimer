import React from "react";

const PauseButton = props => {
  const BEM_BASE = "pause-button";
  return (
    <div className={`${BEM_BASE} ${BEM_BASE}--container`}>
      <button
        className={`${BEM_BASE} ${BEM_BASE}--button`}
        onClick={props.timerPause}
      >
        Pause
      </button>
    </div>
  );
};

export default PauseButton;
