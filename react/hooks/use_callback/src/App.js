import logo from "./logo.svg";
import "./App.css";
import React, { useState, useCallback } from "react";
//renders only with depedency updates NOTE : see useEffect
function App() {
  const [count, setCount] = useState(0);
  const startCount = useCallback(() => {
    console.log("hello");
    setCount(count + 1);
  }, [count]);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={startCount}>increament</button>
    </div>
  );
}

export default App;
