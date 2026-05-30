import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>

      <Header />

      <h1>⚛️ React Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

    </div>
  );
}

export default App;