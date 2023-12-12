import { useState } from "react";
import Content from "./Content";

function App() {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: 32 }}>
            {/* Mounted / Unmounted */}
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                Toogle
            </button>
            {show && <Content />}
        </div>
    );
}

export default App;
