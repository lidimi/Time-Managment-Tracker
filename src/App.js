import Aside from "./Aside";
import Grid from "./Grid";
import React from "react";
import { useState } from "react";

export default function App() {
  const time = "monthly";

  function toggleTimeSpawn() {
    console.log(":(");
  }

  return (
    <main className="app">
      <Aside toggleTimeSpawn={toggleTimeSpawn} />
      <Grid time={time} />
    </main>
  );
}
