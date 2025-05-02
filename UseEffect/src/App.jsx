import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    if (count !== 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(function (response) {
          // handle success
          console.log("api is called at change of count");
          setApiResponse(response.data.title);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [count]);

  return (
    <>
      <div>
        <h1>useEffect Practice</h1>
        <p>on count2 api is not called while on count api is called</p>
        {apiResponse}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((Count2) => count2 + 1)}>
          count2 is {count2}
        </button>
      </div>
    </>
  );
}

export default App;
