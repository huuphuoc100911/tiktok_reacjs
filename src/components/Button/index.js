import clsx from "clsx";
import styles from "./Button.module.css";

// classnames
// clsx

function Button({ primary }) {
    const classes = clsx(styles.btn, "d-flex", {
        [styles.primary]: primary,
    });

    return (
        <>
            <button className={classes}>Click me!</button>

            {/* <button
                className={clsx(styles.btn, {
                    [styles.active]: true,
                })}
            >
                Click me!
            </button> */}
            {/* <button className={`${styles.btn} ${styles.active}`}> */}
        </>
    );
}

export default Button;
