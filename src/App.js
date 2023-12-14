import { useState, useRef, useEffect } from "react";

function App() {
    const [count, setCount] = useState(60);

    const timer = useRef();
    const preCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
        preCount.current = count;
    }, [count]);

    useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect());
    });

    const handleStart = () => {
        timer.current = setInterval(() => {
            setCount((preCount) => preCount - 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timer.current);
    };

    console.log(count, preCount.current);

    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default App;
