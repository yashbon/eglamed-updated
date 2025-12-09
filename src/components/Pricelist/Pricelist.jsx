"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PricelistItem from "../PriceListItem/PricelistItem";
import css from "./PriceList.module.css";
import { motion } from "framer-motion";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import { animation } from "@/data/animation";

export default function PriceList() {
    const [price, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);

    // Позначаємо, що ми на клієнті
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch("/api/price");
                const data = await res.json();

                setLoading(false);

                if (Array.isArray(data)) {
                    setServices(data);

                    // 👉 localStorage тільки на клієнті
                    if (typeof window !== "undefined") {
                        localStorage.setItem("price", JSON.stringify(data));
                    }

                    console.log("✅ Fetched price:", data);
                } else {
                    console.error("❌ Invalid data:", data);
                }
            } catch (error) {
                console.error("❌ Fetch error:", error);
            }
        }

        fetchServices();
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
                                        <PricelistItem item={item} />
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
