import Email from "../Email/Email";
import css from "./Top.module.css";

const Top = () => {
    return (
        <section className={css.top}>
            <div className="container">
                <ul className={css.contacts}>
                    <li className={css.contactsItem}>
                        <a href="tel:+380674123050" className={css.contactsLink}>
                            <svg className={css.contactsIcon} width="16px" height="16px">
                                <use href="./icons/symbol-defs.svg#icon-phone" />
                            </svg>
                            +38 067 412 30 50
                        </a>
                    </li>

                    <li className={css.contactsItem}>
                        <a href="https://www.instagram.com/eglamed" className={css.contactsLink}>
                            <svg className={css.contactsIcon} width="16px" height="16px">
                                <use href="./icons/symbol-defs.svg#icon-instagram" />
                            </svg>
                            Instagram
                        </a>
                    </li>

                    <li className={css.contactsItem}>
                        <a href="mailto:eglamed@ukr.net" className={css.contactsLink}>
                            <svg className={css.contactsIcon} width="16px" height="16px">
                                <use href="./icons/symbol-defs.svg#icon-email" />
                            </svg>
                            eglamed@ukr.net
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Top;
