import css from "./AboutDoctor.module.css";
import { motion } from "framer-motion";

const AboutDoctor = ({ doctor, show }) => {
    return (
        <article className={css.aboutDoctor}>
            <div className={css.doctorMain}>
                <p>Кваліфікація: {doctor.qualification}</p>
                <p>Стаж роботи: {doctor.experience}</p>
            </div>

            <div className={css.doctorDescription}>
                <h4>Професійний розвиток:</h4>
                <ul className={css.list}>
                    {doctor.development?.length > 0 &&
                        doctor.development.map((item, id) => (
                            <li key={id}>
                                <p>{item}</p>
                            </li>
                        ))}
                </ul>
                <h4>Пріоритетні напрямки в практичній діяльності:</h4>
                <ul className={css.list}>
                    {doctor.directions?.length > 0 &&
                        doctor.directions.map((item, id) => (
                            <li key={id}>
                                <p>{item}</p>
                            </li>
                        ))}
                </ul>
            </div>
        </article>
    );
};

export default AboutDoctor;
