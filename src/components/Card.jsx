import React from "react";
import "./Card.css";

export function Card({ subject, hours, onHourChange }) {
  return (
    <>
      <div className="card">
        <div className="subjects">
          <span className="sub">{subject}</span>
        </div>
        <div className="hour">
          <span className="hour">{hours} hours</span>
        </div>
        <div className="btns">
          <button onClick={() => onHourChange(1)}>+</button>
          <button onClick={() => onHourChange(-1)}>-</button>
        </div>
      </div>
    </>
  );
}
