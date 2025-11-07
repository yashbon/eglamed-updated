"use client";

import { motion } from "framer-motion";

const SectionTitle = ({ title, isVisibale }) => {
    return (
        <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={
                isVisibale == false ? { display: "none" } : { display: "block" }
            }
        >
            {title}
        </motion.h2>
    );
};

export default SectionTitle;
