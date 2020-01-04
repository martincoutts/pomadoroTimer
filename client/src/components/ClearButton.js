import React from "react";

const ClearButton = props => {
  const BEM_BASE = "clear-button";
  return (
    <div className={`${BEM_BASE} ${BEM_BASE}--container`}>
      <button
        className={`${BEM_BASE} ${BEM_BASE}--button`}
        onClick={props.timerReset}
      >
        Clear
      </button>
    </div>
  );
};

export default ClearButton;
