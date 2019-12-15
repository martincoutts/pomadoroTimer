import React from "react";

const StartButton = props => {
  return (
    <div>
      <button
        id="button__start"
        onClick={() => {
          props.timerStart();
          props.convertToSeconds(props.minutes);
          props.timer(props.minutes);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartButton;
