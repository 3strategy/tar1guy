import './Counter.css';
import { useState } from "react";
function Counter() {
    console.log("a");
    const [counter, setCounter] = useState(0);

    function inc() {
        setCounter(counter + 100);
    }

    function dec() {
        setCounter(counter - 100);
    }
    return (
        <div>
            <h1>My Counter</h1>
            <p>{counter}</p>
            <button onClick={inc}>Add 100</button>
            <button onClick={dec}>Subtract 100</button>
        </div>
    )
}

export default Counter;