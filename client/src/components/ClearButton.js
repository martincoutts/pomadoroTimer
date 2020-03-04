import React from "react";
import { Button } from "antd";

const ClearButton = props => {
  const BEM_BASE = "clear-button";
  return (
    <div className={`${BEM_BASE} ${BEM_BASE}--container`}>
      <Button
        className={`${BEM_BASE} ${BEM_BASE}--button timer-button`}
        onClick={props.timerReset}
      >
        Clear
      </Button>
    </div>
  );
};

export default ClearButton;
