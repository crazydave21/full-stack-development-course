import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
//Functional component
// function App() {
//   const [input, setInput] = useState("");
//   return (
//     <div className="form">
//       <form>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         ></input>
//         <button
//           onClick={() => {
//             alert("Entered input : " + input);
//             console.log(input);
//           }}
//         >
//           submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

//Class component
class App extends Component {
  constructor() {
    super();
    this.state = { input: "" };
  }
  render() {
    return (
      <div className="form">
        <form>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          ></input>
          <button
            onClick={() => {
              console.log(this.state.input);
              alert("Entered Input : " + this.state.input);
            }}
          >
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
