import logo from "./logo.svg";
import "./App.css";
import useCounter from "./useCounter";

function App() {
  const count = useCounter();
  return (
    <div className="App">
      <p>COUNTER : {count}</p>
    </div>
  );
}

export default App;
