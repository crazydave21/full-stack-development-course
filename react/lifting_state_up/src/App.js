import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
// //without lifting state
// function Show({ children }) {
//   const [display, setDisplay] = useState(false);
//   return (
//     <div>
//       {display ? <p>{children}</p> : null}
//       <button onClick={() => setDisplay(true)}>Click</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Show>
//         <p>Hello</p>
//       </Show>
//       <Show>
//         <p>World</p>
//       </Show>
//     </div>
//   );
// }

// export default App;

// //with lifting state
// function Show({ children, display, setDisplay }) {
//   return (
//     <div>
//       {display ? <p>{children}</p> : null}
//       <button onClick={() => setDisplay(true)}>Click</button>
//     </div>
//   );
// }

// function App() {
//   const [display, setDisplay] = useState(false);
//   return (
//     <div className="App">
//       <Show display={display} setDisplay={setDisplay}>
//         <p>Hello</p>
//       </Show>
//       <Show display={display} setDisplay={setDisplay}>
//         <p>World</p>
//       </Show>
//     </div>
//   );
// }

// export default App;

//example
function Show({ children, display, onShow }) {
  return (
    <div>
      {display ? <p>{children}</p> : <button onClick={onShow}>Click</button>}
    </div>
  );
}

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <Show display={display === false} onShow={() => setDisplay(false)}>
        <p>Hello</p>
      </Show>
      <Show display={display === true} onShow={() => setDisplay(true)}>
        <p>World</p>
      </Show>
    </div>
  );
}

export default App;
