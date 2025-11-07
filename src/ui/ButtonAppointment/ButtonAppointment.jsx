import css from "./ButtonAppointment.module.css";

const ButtonAppointment = ({ onClick }) => {
    return (
        <button className={css.button} onClick={onClick}>
            Запис на прийом
        </button>
    );
};

export default ButtonAppointment;
