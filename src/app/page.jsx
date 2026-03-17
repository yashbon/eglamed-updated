import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import Doctors from "@/components/Doctors/Doctors";
import PriceList from "@/components/PriceList/PriceList";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";
import CallForm from "@/components/CallForm/CallForm";
import ButtonScrollUp from "@/components/ButtonScrollUp/ButtonScrollUp";
import ButtonCallForm from "@/components/ButtonCallForm/ButtonCallForm";
import styles from "./page.module.css";
import ProgressBar from "@/ui/ProgressBar/ProgressBar";

import { getPrice } from "./lib/getPrice";

export default async function Home() {
    const price = await getPrice();
    return (
        <>
            <ProgressBar />
            <Header />
            <main className={styles.main}>
                <Hero />
                <Services />
                <Doctors />
                <About />
                <PriceList price={price}/>
                <CallForm price={price}/>
                <ContactUs />
            </main>
            <ButtonCallForm />
            <ButtonScrollUp />
            <Footer />
        </>
    );
}
