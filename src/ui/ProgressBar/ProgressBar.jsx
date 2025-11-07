"use client";

import { motion, useScroll } from "framer-motion";
import css from "./ProgressBar.module.css";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                className={css.progressBar}
                style={{ scaleX: scrollYProgress }}
            />
        </>
    );
};

export default ProgressBar;
