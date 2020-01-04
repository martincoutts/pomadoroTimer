import React from "react";

const StartButton = props => {
  const BEM_BASE = "start-pause-button";
  return (
    <button
      className={`${BEM_BASE} ${BEM_BASE}--button__start`}
      onClick={() => {
        props.timerStart();
        props.convertToSeconds(props.minutes);
        props.timer();
      }}
    >
      Start
    </button>
  );
};

export default StartButton;
