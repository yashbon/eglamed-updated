"use client";
import { motion } from "framer-motion";
import ServicesListItem from "../ServicesListItem/ServicesListItem";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import services from "@/data/services";
import { animation } from "@/data/animation";
import css from "./Services.module.css";

const Services = () => {
    return (
        <section id="services" className={css.services}>
            <div className="container">
                <div className={css.servicesWrapper}>
                    <SectionTitle title="Послуги" />
                    <ul className={css.servicesList}>
                        {services?.length > 0 &&
                            services.map((item) => (
                                <motion.li
                                    key={item.id}
                                    className={css.servicesItem}
                                    initial="hide"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    variants={animation}
                                >
                                    <ServicesListItem item={item} />
                                </motion.li>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
