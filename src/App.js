import Grid from "./Grid";
import React from "react";
import { useState } from "react";

export default function App() {
  const avatar = require("./images/image-jeremy.png");
  const [time, setTime] = useState("daily");

  function toggleTimeSpawn(e) {
    if (e.target.tagName.toLowerCase() === "li") {
      setTime(e.target.textContent.toLowerCase());
    }
  }
  return (
    <main className="app">
      <aside className="aside">
        <div className="hero">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <p>Report For</p>
          <h1>Jeremy Robson</h1>
        </div>

        <section className="timespan">
          <ul onClick={toggleTimeSpawn}>
            <li className="active">Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
        </section>
      </aside>
      <Grid time={time} />
    </main>
  );
}
