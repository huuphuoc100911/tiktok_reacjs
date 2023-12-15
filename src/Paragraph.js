import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Paragraph() {
    const context = useContext(ThemeContext);

    return (
        <div>
            <p style={{ color: "red" }}>{context.theme}</p>
            <p className={context.theme}>
                Discover a wide variety of Pawsitive services to choose from,
                including daycare, private walks, office duty and spa.
            </p>
        </div>
    );
}

export default Paragraph;
