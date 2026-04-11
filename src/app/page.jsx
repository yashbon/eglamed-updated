import ProgressBar from "@/ui/ProgressBar/ProgressBar";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import Doctors from "@/components/Doctors/Doctors";
import About from "@/components/About/About";
import PriceList from "@/components/PriceList/PriceList";
import CallForm from "@/components/CallForm/CallForm";
import Footer from "@/components/Footer/Footer";
import ButtonScrollUp from "@/components/ButtonScrollUp/ButtonScrollUp";
import ButtonCallForm from "@/components/ButtonCallForm/ButtonCallForm";
import styles from "./page.module.css";

import { getPrice } from "./lib/getPrice";
import Top from "@/components/Top/Top";

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
