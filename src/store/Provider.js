import { useReducer } from "react";
import Context from "./Context";
import reducer, { iniState } from "./reducer";
import logger from "./logger";

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), iniState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
