// "use client";

import Top from "../Top/Top";
import Navbar from "../Navbar/Navbar";
import css from "./Header.module.css";
import ProgressBar from "@/ui/ProgressBar/ProgressBar";

// import { motion, useScroll } from "framer-motion";

const Header = () => {
    // const { scrollYProgress } = useScroll();
    return (
        <header className={css.header}>
            {/* <motion.div
                className={css.progressBar}
                style={{ scaleX: scrollYProgress }}
            /> */}
            {/* <ProgressBar /> */}
            <Top />
            <Navbar />
        </header>
    );
};

export default Header;
