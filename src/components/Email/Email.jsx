import css from "./Email.module.css";

const Email = () => {
    return (
        <div>
            <h4 className={css.emailTitle}>Електронна пошта</h4>
            <a href="mailto:eglamed@ukr.net" className={css.emailLink}>
                <svg className={css.emailIcon}>
                    <use href="./icons/symbol-defs.svg#icon-email"></use>
                </svg>
                <span className={css.emailText}>eglamed@ukr.net</span>
            </a>
        </div>
    );
};

export default Email;
