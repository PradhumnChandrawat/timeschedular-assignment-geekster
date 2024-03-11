import React, { useState } from "react";
import "./App.css";
import { Inputfields } from "./components/Inputfields";
import { Card } from "./components/Card";

function App() {
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subject, hours) => {
    setSubjects([
      ...subjects,
      { subject, hours: Number(hours), id: Date.now() },
    ]);
  };

  const updateHours = (id, delta) => {
    setSubjects(
      subjects.map((sub) => {
        if (sub.id === id) {
          return { ...sub, hours: sub.hours + delta };
        }
        return sub;
      })
    );
  };

  return (
    <div className="App">
      <Inputfields onAdd={addSubject} />
      {subjects.map((sub) => (
        <Card
          key={sub.id}
          subject={sub.subject}
          hours={sub.hours}
          onHourChange={(delta) => updateHours(sub.id, delta)}
        />
      ))}
    </div>
  );
}

export default App;
