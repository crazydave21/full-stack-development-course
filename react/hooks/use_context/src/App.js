import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useContext } from "react";
//used to avoid props drilling
// const myContext = createContext();
// function App() {
//   const data = "Hello World";

//   return (
//     <div className="App">
//       <myContext.Provider value={data}>
//         <Component />
//       </myContext.Provider>
//     </div>
//   );
// }

// function Component() {
//   return (
//     <div>
//       <myContext.Consumer>{(value) => <p>{value}</p>}</myContext.Consumer>
//     </div>
//   );
// }

// export default App;

//another way
const myContext = createContext();
function App() {
  const data = "Hello World";

  return (
    <div className="App">
      <myContext.Provider value={data}>
        <Component />
      </myContext.Provider>
    </div>
  );
}

function Component() {
  const data = useContext(myContext);
  return <div>{data}</div>;
}

export default App;
