"use client";

import { useEffect, useState } from "react";
import css from "./ButtonCallForm.module.css";
import scrollToCallForm from "@/services/scrollToCallForm";

const ButtonCallForm = () => {
    const [showButtonCallForm, setShowButtonCallForm] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const element = document.getElementById("callform");
            const domRect = element.getBoundingClientRect();
            -150 < domRect.y && domRect.y < domRect.height - 150
                ? setShowButtonCallForm(false)
                : setShowButtonCallForm(true);
        });
    });

    return (
        showButtonCallForm && (
            <button className={css.ButtonCallForm} onClick={scrollToCallForm}>
                <svg className={css.ButtonCallFormIcon}>
                    <use href="./icons/symbol-defs.svg#icon-phone-call-back"></use>
                </svg>
            </button>
        )
    );
};

export default ButtonCallForm;
