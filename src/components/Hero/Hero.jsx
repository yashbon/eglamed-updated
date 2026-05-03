import css from "./Hero.module.css";
import Image from "next/image";
import heroBg from "../../../public/images/hero_bg.jpg";

const Hero = () => {
    return (
        <section id="main" className={css.hero}>
            <Image
                className={css.bg}
                src={heroBg}
                alt="Гінекологічна клініка EglaMed у Житомирі"
                fill={true}
                loading="eager"
                // preload={true} // Новий стандарт для Next.js 16
                fetchPriority="high" // Вказує браузеру, що це зображення має високий пріоритет завантаження
                // priority // Обов'язково для LCP елемента
                sizes="100vw"
                quality={85} // Можна трохи підняти якість, якщо 75 замало
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
