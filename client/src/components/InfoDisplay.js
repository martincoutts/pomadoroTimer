import React from "react";

import Moment from "react-moment";
import "moment-timezone";

const InfoDisplay = props => {
  return (
    <div className="info-display--container">
      <Moment format="Do MMMM YYYY">{props.date}</Moment>
      <span>{props.studyPeriods}</span>
      <span>{props.breaksTaken}</span>
    </div>
  );
};

export default InfoDisplay;
