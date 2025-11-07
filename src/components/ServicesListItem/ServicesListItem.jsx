// import Image from "next/image";
import css from "./ServicesListItem.module.css";

const ServicesListItem = ({ item }) => {
    const { icon, title, description, list } = item;

    return (
        <>
            <div className={css.circle}>
                <img
                    src={icon}
                    width={50}
                    height={50}
                    alt="icon"
                    // priority
                    style={{ width: "50px", height: "50px" }}
                />
            </div>
            <div className={css.descriptionWrapper}>
                <h3 className={css.servicesTitle}>{title}</h3>
                <p className={css.servicesDescription}>{description}</p>
                <ul className={css.servicesList}>
                    {list.map((li, index) => (
                        <li key={index}>
                            <p className={css.servicesDescription}>{li}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ServicesListItem;
