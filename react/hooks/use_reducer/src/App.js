import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";

function btnCheck(state, action) {
  switch (action.type) {
    case "JUMP":
      return (state = "Jump");
    case "RUN":
      return (state = "Run");
    default:
      return state;
  }
}

function App() {
  const initialValue = "Not Pressed";
  const [value, setValue] = useReducer(btnCheck, initialValue);
  return (
    <div className="App">
      <h3>Button pressed:</h3>
      <p>{value}</p>
      <button onClick={() => setValue({ type: "JUMP" })}>Jump</button>
      <br></br>
      <br></br>
      <button onClick={() => setValue({ type: "RUN" })}>Run</button>
    </div>
  );
}

export default App;
