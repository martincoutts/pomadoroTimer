import React from "react";

import Timer from "./Timer";
import StartButton from "./StartButton";
import ClearButton from "./ClearButton";

function App() {
  return (
    <div className="App">
      <Timer />
      <StartButton />
      <ClearButton />
    </div>
  );
}

export default App;
