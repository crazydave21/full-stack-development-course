import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    if (!reset) {
      const timer = () => setCount(count + 1);
      setTimeout(timer, 1000);
    } else return;
  });
  return (
    <div className="App">
      <p>{"Count : " + count}</p>
      <button
        onClick={() => {
          setReset(true);
        }}
      >
        stop
      </button>
    </div>
  );
}

export default App;
