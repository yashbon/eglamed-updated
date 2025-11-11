"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import pricelist from "@/data/price.json";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import PricelistItem from "../PricelistItem/PricelistItem";
import { animation } from "@/data/animation";
import css from "./Pricelist.module.css";

const Pricelist = () => {
    return (
        <section id="pricelist" className={css.pricelist}>
            <div className="container">
                <SectionTitle title="Ціни" />
                <motion.div className={css.pricelistWrapper} initial="hide" whileInView="show" viewport={{ once: true }} variants={animation}>
                    <ul className={css.pricelistList}>
                        {pricelist?.length > 0 &&
                            pricelist.map((item) => (
                                <li key={item.id} className={css.pricelistItem}>
                                    <Link to="callform" smooth={true} href="#callform">
                                        <PricelistItem item={item} />
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </motion.div>
                <motion.div className={css.butWrapper} initial="hide" whileInView="show" viewport={{ once: true }} variants={animation}></motion.div>
            </div>
        </section>
    );
};

export default Pricelist;
