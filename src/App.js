import { useContext } from "react";
import TodoApp from "./Todo/";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

// prop: ComA => ComB => ComC
// Context:
// prop: comA => comC
// 1. Create Context
// 2. Provider
// 3. Consumer

function App() {
    const context = useContext(ThemeContext);

    return (
        <div style={{ padding: 20 }}>
            <TodoApp />
            <button onClick={context.toggleTheme}>Toggle</button>
            <Content />
        </div>
    );
}

export default App;
