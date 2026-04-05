import css from "./Hero.module.css";
import Image from "next/image";
import heroBg from "../../../public/images/hero_bg.jpg";

const Hero = () => {
    return (
        <section id="main" className={css.hero}>
            <Image
                src={heroBg}
                alt="EglaMed"
                fill
                priority
                className={css.bg}
            />
            <div className="container">
                <div className={css.description}>
                    <h1 className={css.mainTitle}>Гінекологічна клініка EglaMed — консультації, УЗД, лікування | Житомир</h1>
                    <span className={css.title}>
                        Ласкаво просимо до <span className={css.title_eglamed}>EglaMed</span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
