import css from "./MobileMenuBtn.module.css";

const MobileMenuBtn = ({ isActive, onClick }) => {
    return (
        <button
            type="button"
            className={
                isActive ? css.menuToggleBtnActive : css.menuToggleBtnUnactive
            }
            onClick={() => onClick()}
        >
            <span></span>
        </button>
    );
};

export default MobileMenuBtn;
