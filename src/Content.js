import { useEffect, useState } from "react";

function Content() {
    const [countdown, setCountDown] = useState(180);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountDown((prevState) => prevState - 1);
            console.log("Countdown...");
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    );
}

export default Content;
