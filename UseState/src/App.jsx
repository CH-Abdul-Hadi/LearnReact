import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <h1>uesState Practice</h1>
          <button>{count}</button>
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
        <button onClick={() => setCount((count) => count - 1)}>-1</button>
        <button onClick={() => setCount((count) => count * 2)}>*2</button>
        <button onClick={() => setCount((count) => count / 2)}>/2</button>
        <button onClick={() => setCount((count) => count * 0)}>reset</button>
      </div>
    </>
  );
}

export default App;
