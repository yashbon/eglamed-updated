import css from "./Address.module.css";

const Address = () => {
    return (
        <div>
            <h3 className={css.addressTitle}>Адреса</h3>
            <address>
                <a href="https://maps.app.goo.gl/18MnJHcw2Q9ecdCD7" target="_blank" rel="nofollow noopener noreferrer" className={css.addressLink}>
                    <svg className={css.addressIcon}>
                        <use href="./icons/symbol-defs.svg#icon-address"></use>
                    </svg>
                    <span className={css.addressText}>
                        м. Житомир, <br />
                        вул. Лесі-Українки, <br /> 13-а
                    </span>
                </a>
            </address>
        </div>
    );
};

export default Address;
