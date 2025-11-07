"use client";

import { useEffect, useState } from "react";
import css from "./ButtonScrollUp.module.css";

const ButtonScrollUp = () => {
    const [showButtonScrollUp, setShowButtonScrollUp] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowButtonScrollUp(true);
            } else {
                setShowButtonScrollUp(false);
            }
        });
    }, []);

    const goUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        showButtonScrollUp && (
            <button className={`${css.buttonScrollUp}`} onClick={goUp}>
                <svg className={css.buttonScrollUpIcon}>
                    <use href="./icons/symbol-defs.svg#icon-up"></use>
                </svg>
            </button>
        )
    );
};

export default ButtonScrollUp;
