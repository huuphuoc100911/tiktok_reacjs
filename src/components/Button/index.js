import clsx from "clsx";
import styles from "./Button.module.scss";

// classnames
// clsx

function Button({ primary, disabled }) {
    const classes = clsx(styles.btn, "d-flex", {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
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
