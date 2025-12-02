// "use client";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// import pricelist from "@/data/price.json";
// import SectionTitle from "@/ui/SectionTitle/SectionTitle";
// import PricelistItem from "../PricelistItem/PricelistItem";
// import { animation } from "@/data/animation";
// import css from "./Pricelist.module.css";

// const Pricelist = () => {
//     return (
//         <section id="pricelist" className={css.pricelist}>
//             <div className="container">
//                 <SectionTitle title="Ціни" />
//                 <motion.div className={css.pricelistWrapper} initial="hide" whileInView="show" viewport={{ once: true }} variants={animation}>
//                     <ul className={css.pricelistList}>
//                         {pricelist?.length > 0 &&
//                             pricelist.map((item) => (
//                                 <li key={item.id} className={css.pricelistItem}>
//                                     <Link to="callform" smooth={true} href="#callform">
//                                         <PricelistItem item={item} />
//                                     </Link>
//                                 </li>
//                             ))}
//                     </ul>
//                 </motion.div>
//                 <motion.div className={css.butWrapper} initial="hide" whileInView="show" viewport={{ once: true }} variants={animation}></motion.div>
//             </div>
//         </section>
//     );
// };

// export default Pricelist;

"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PricelistItem from "../PriceListItem/PriceListItem";
import css from "./PriceList.module.css";
import { motion } from "framer-motion";
// import pricelist from "@/data/price.json";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import { animation } from "@/data/animation";

export default function PriceList() {
    const [price, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch("/api/price");
                const data = await res.json();
                console.log("data", data);

                setLoading(false);

                if (Array.isArray(data)) {
                    setServices(data);

                    // 👉 Зберігаємо у localStorage
                    localStorage.setItem("price", JSON.stringify(data));

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
                <motion.div className={css.pricelistWrapper} initial="hide" whileInView="show" viewport={{ once: true }} variants={animation}>
                    <ul className={css.pricelistList}>
                        {price?.length > 0 &&
                            price.map((item, index) => (
                                <li key={index} className={css.pricelistItem}>
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
}
