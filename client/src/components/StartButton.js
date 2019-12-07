import React from "react";

const StartButton = props => {
  return (
    <div>
      <button
        id="button__start"
        onClick={() => {
          props.timerStart();
          props.convertToSeconds(props.timeInMinutes);
          props.timer(props.timeInMinutes);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartButton;
