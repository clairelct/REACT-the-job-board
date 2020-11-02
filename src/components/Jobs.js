import React from "react";

const Jobs = (props) => {
  return (
    <>
      <div className={props.className}>
        <h2>{props.title}</h2>
        <p>
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </>
  );
};

export default Jobs;
