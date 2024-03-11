import React, { useState } from "react";
import "./Inputfields.css";

export function Inputfields({ onAdd }) {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(subject, hours);
    setSubject("");
    setHours("");
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <h1 className="heading">Education Planner</h1>
        </div>
        <form className="input-area" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Subject"
            className="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="number"
            placeholder="00"
            className="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
