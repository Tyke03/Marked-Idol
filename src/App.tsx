import React from 'react';
import { ReactRunner } from "@chub-ai/stages-ts";
import { Stage } from "./Stage";

function App() {
  // We use the 'factory' prop, which expects a function that returns a new Stage instance.
  return <ReactRunner factory={(data: any) => new Stage(data)} />;
}

export default App;