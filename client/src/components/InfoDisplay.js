import React from "react";

import Moment from "react-moment";
import "moment-timezone";

const InfoDisplay = props => {
  const BEM_BASE = "info-display";

  return (
    <div className={`${BEM_BASE}  ${BEM_BASE}--container`}>
      <div className={`${BEM_BASE}  ${BEM_BASE}--item-container`}>
        {" "}
        <span
          className={`${BEM_BASE} ${BEM_BASE}--span ${BEM_BASE}--span__date`}
        >
          <Moment format="Do MMMM YYYY">{props.date}</Moment>
        </span>
      </div>
      <div className={`${BEM_BASE}  ${BEM_BASE}--item-container`}>
        <span
          className={`${BEM_BASE} ${BEM_BASE}--span ${BEM_BASE}--span__study-periods`}
        >
          {props.studyPeriods}
        </span>
      </div>
      <div className={`${BEM_BASE}  ${BEM_BASE}--item-container`}>
        <span
          className={`${BEM_BASE} ${BEM_BASE}--span ${BEM_BASE}--span__breaks-taken`}
        >
          {props.breaksTaken}
        </span>
      </div>
    </div>
  );
};

export default InfoDisplay;
