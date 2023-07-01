import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => setCount(count + 1));

//   return <div className="App">{count}</div>;
// }

// export default App;

// //to stop rerender
// function App() {
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return <div className="App">{count.current}</div>;
// }

// export default App;

//access dom elements
function App() {
  const input = useRef("");
  const setFocus = () => {
    input.current.focus();
  };

  return (
    <div>
      <input type="text" ref={input}></input>
      <button onClick={setFocus}>click</button>
    </div>
  );
}

export default App;
