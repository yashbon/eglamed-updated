import dynamic from 'next/dynamic'; // 1. Додаємо імпорт dynamic

import ProgressBar from "@/ui/ProgressBar/ProgressBar";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
// import Services from "@/components/Services/Services";
// import Doctors from "@/components/Doctors/Doctors";
import About from "@/components/About/About";
// import PriceList from "@/components/PriceList/PriceList";
// import CallForm from "@/components/CallForm/CallForm";
// import ContactUs from "@/components/ContactUs/ContactUs";
// import Footer from "@/components/Footer/Footer";
import ButtonScrollUp from "@/components/ButtonScrollUp/ButtonScrollUp";
import ButtonCallForm from "@/components/ButtonCallForm/ButtonCallForm";
import styles from "./page.module.css";

import { getPrice } from "./lib/getPrice";
import Top from "@/components/Top/Top";

// Використовуємо динамічний імпорт БЕЗ ssr: false тут.
// Next.js сам зробить чанкінг, а клієнтська частина завантажиться у браузері.
const Services = dynamic(() => import("@/components/Services/Services"));
const Doctors = dynamic(() => import("@/components/Doctors/Doctors"));
const PriceList = dynamic(() => import("@/components/PriceList/PriceList"));
const CallForm = dynamic(() => import("@/components/CallForm/CallForm"), {
    loading: () => <div style={{ height: '400px' }}>Завантаження форми...</div> 
});
const ContactUs = dynamic(() => import("@/components/ContactUs/ContactUs"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

export default async function Home() {
    const price = await getPrice();

    return (
        <>
            <ProgressBar />
            <Top />
            <Header />
            <main className={styles.main}>
                <Hero />
                <Services />
                <Doctors />
                <About />
                <PriceList price={price} />
                <CallForm price={price} />
                <ContactUs />
            </main>
            <ButtonCallForm />
            <ButtonScrollUp />
            <Footer />
        </>
    );
}
