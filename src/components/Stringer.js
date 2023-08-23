import './Stringer.css';
import { useState } from "react";
function Stringer() {
    console.log("a");
    const [st, setSt] = useState("A");

    function addToS() {
        setSt(st + "A");
    }

    function clearAllAs() {
        setSt(st.replace(/A/g, ''));
    }

    function chopS1() {
        setSt(st.slice(0, -1));
    }

    return (
        <div>
            <h1>My Stringer</h1>
            <p>{st}</p>
            <button onClick={addToS}>Add "A"</button>
            <button onClick={clearAllAs}>Clear all "A" letters</button>
            <button onClick={chopS1}>Remove Last Character</button>
        </div>
    )
}
export default Stringer;