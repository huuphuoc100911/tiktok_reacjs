import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload. HuuPhuoc
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

// import { useState } from "react";

// function App() {
//     const [counter, setCounter] = useState(1);

//     const handleIncrease = () => {
//         setCounter(counter + 1);
//     };

//     return (
//         <div className="App" style={{ padding: 20 }}>
//             <h1>{counter}</h1>
//             <button onClick={handleIncrease}>Increase</button>
//         </div>
//     );
// }

// export default App;
