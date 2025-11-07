// import Image from "next/image";
import Image from "next/image";
import css from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={css.logoWrap}>
            <div className={css.logo}>
                <Image src="/images/EglaMed_Logo.png" alt="EglaMed" priority fill sizes="100%" />
            </div>
            <div>
                <p className={css.brand}>EglaMed</p>
                <p className={css.footerText} style={{ fontSize: "12px" }}>
                    Наш досвід до Ваших послуг
                </p>
            </div>
        </div>
    );
};

export default Logo;
