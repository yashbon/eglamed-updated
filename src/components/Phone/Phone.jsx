import css from "./Phone.module.css";

const Phone = () => {
    return (
        <div>
            <h4 className={css.phoneTitle}>Контактний телефон</h4>
            <a href="tel:+38 067 412 30 50" className={css.phoneLink}>
                <svg className={css.phoneIcon}>
                    <use href="./icons/symbol-defs.svg#icon-phone"></use>
                </svg>
                <span className={css.phoneText}>+38 067 412 30 50</span>
            </a>
        </div>
    );
};

export default Phone;
