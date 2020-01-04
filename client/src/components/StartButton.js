import React from "react";

const StartButton = props => {
  const BEM_BASE = "start-button";
  return (
    <div className={`${BEM_BASE} ${BEM_BASE}--container`}>
      <button
        className={`${BEM_BASE} ${BEM_BASE}--button`}
        onClick={() => {
          props.timerStart();
          props.convertToSeconds(props.minutes);
          props.timer();
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartButton;
