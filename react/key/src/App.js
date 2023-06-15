import logo from "./logo.svg";
import "./App.css";
function Component(props) {
  return <li>{props.value}</li>;
}

function App() {
  const numbers = [2, 4, 6, 8];
  const list = numbers.map((number) => (
    <Component key={number.toString()} value={number} />
  ));
  return <ul>{list}</ul>;
}

export default App;
