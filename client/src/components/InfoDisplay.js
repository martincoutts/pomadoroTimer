import React from "react";

const InfoDisplay = props => {
  let date = props.date.getDate();
  let month = props.date.getMonth();
  let year = props.date.getYear();

  return (
    <div className="info-display--container">
      <span>{`${date} ${month} ${year}`}</span>
      <span>{props.studyPeriods}</span>
      <span>{props.breaksTaken}</span>
    </div>
  );
};

export default InfoDisplay;
