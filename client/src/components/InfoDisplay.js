import React from "react";

import Moment from "react-moment";
import "moment-timezone";

const InfoDisplay = props => {
  const BEM_BASE = "info-display";

  return (
    <div className={`${BEM_BASE}  ${BEM_BASE}--container`}>
      <div
        className={`${BEM_BASE} ${BEM_BASE}--item-container ${BEM_BASE}--item-container__date`}
      >
        {" "}
        <h3
          className={`${BEM_BASE} ${BEM_BASE}--header ${BEM_BASE}--header__date`}
        >
          <Moment format="Do MMMM YYYY">{props.date}</Moment>
        </h3>
      </div>
      <div
        className={`${BEM_BASE} ${BEM_BASE}--item-container  ${BEM_BASE}--item-container__study-periods`}
      >
        <h4 className={`${BEM_BASE}   ${BEM_BASE}--sub-header__study-periods`}>
          Study Periods Complete:
        </h4>
        <span
          className={`${BEM_BASE} ${BEM_BASE}--span ${BEM_BASE}--span__study-periods`}
        >
          {props.studyPeriods}
        </span>
      </div>
      <div
        className={`${BEM_BASE} ${BEM_BASE}--item-container  ${BEM_BASE}--item-container__breaks-taken`}
      >
        <h4 className={`${BEM_BASE}  ${BEM_BASE}--sub-header`}>
          Breaks Taken:
        </h4>
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
