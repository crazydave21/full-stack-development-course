import "./App.css";
const numbers = [4, 6, 7, 9];
function App() {
  const list = numbers.map((number) => <li>{number}</li>);
  return (
    <div>
      <h2 style={{ margin: "10px" }}>List</h2>
      <ul>{list}</ul>
    </div>
  );
}

export default App;
