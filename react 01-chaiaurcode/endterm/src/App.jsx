import React from "react";
import CountdownTimer from "./CountdownTimer";

const App = () => {
  return (
    <div>
      <h1>EndTerm practical</h1>
      <CountdownTimer initialSeconds={500} />
    </div>
  );
};

export default App;