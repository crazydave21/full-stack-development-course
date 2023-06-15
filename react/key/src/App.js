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
  return (
    <div>
      <h2 style={{ margin: "5px" }}>List and key</h2>
      <ul>{list}</ul>
    </div>
  );
}

export default App;
