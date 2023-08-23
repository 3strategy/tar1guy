import './Counter.css';
import { useState } from "react";
function Counter() {
  console.log("a");
  const [counter, setCounter] = useState(0);

  function inc() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>My Counter</h1>
      <p>{counter}</p>
      <button onClick={inc}>Click My</button>
    </div>
  )
}

export default Counter;