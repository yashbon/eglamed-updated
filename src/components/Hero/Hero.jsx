import css from "./Hero.module.css";
const Hero = () => {
    return (
        <section id="main" className={css.hero}>
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
