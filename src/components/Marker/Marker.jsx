import css from "./Marker.module.css";

const Marker = () => {
    return (
        <svg className={css.marker} width={16} height={16}>
            <use href="./icons/symbol-defs.svg#icon-east"></use>
        </svg>
    );
};

export default Marker;
