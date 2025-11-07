import { RotatingLinesSpinner } from "../Spinner/RotatingLinesSpinner";
import css from "./Button.module.css";

const Button = ({
    type,
    caption,
    disabled = false,
    isClickBut = false,
    isFetchOk = false,
    onClick,
}) => {

    if (isClickBut || isFetchOk) {
        disabled = true;
    }

    return (
        <>
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={css.button}
            >
                {isClickBut ? (
                    <RotatingLinesSpinner />
                ) : isFetchOk ? (
                    <svg className={css.icon} width="36px" height="36px">
                        <use href="./icons/symbol-defs.svg#icon-check" />
                    </svg>
                ) : (
                    `${caption}`
                )}
            </button>
        </>
    );
};

export default Button;
