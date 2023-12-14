import { memo } from "react";

function Content({ count2 }) {
    console.log("re-render");

    return <h1>Hello ae - {count2}</h1>;
}

export default memo(Content);
