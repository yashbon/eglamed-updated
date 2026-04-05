"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PriceListItem from "../PriceListItem/PriceListItem";
import css from "./PriceList.module.css";
import { motion } from "framer-motion";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import { animation } from "@/data/animation";

export default function PriceList({price}) {
    const [isClient, setIsClient] = useState(false);

    // Позначаємо, що ми на клієнті
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsClient(true);
    }, []);

    return (
        <section id="pricelist" className={css.pricelist}>
            <div className="container">
                <SectionTitle title="Ціни" />
                <motion.div
                    className={css.pricelistWrapper}
                    initial="hide"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={animation}
                >
                    <ul className={css.pricelistList}>
                        {/* ❗ Рендеримо список тільки на клієнті */}
                        {isClient && price.length > 0 &&
                            price.map((item, index) => (
                                <li key={index} className={css.pricelistItem}>
                                    <Link to="callform" smooth={true} href="#callform">
                                        <PriceListItem item={item} />
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

