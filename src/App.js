import { useState } from "react";
import Content from "./Content";

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);
    const increase = () => {
        setCount(count + 1);
    };
    const increase2 = () => {
        setCount2(count2 + 1);
    };

    return (
        <div style={{ padding: 20 }}>
            <Content count2={count2} />
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={increase2}>Increase2</button>
        </div>
    );
}

export default App;
