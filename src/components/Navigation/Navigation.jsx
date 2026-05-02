"use client";

import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import navigation from "@/data/navigation.json";
import scrollToCallForm from "@/services/scrollToCallForm";
import css from "./Navigation.module.css";
import ButtonAppointment from "@/ui/ButtonAppointment/ButtonAppointment";

const Navigation = ({ isOpen, handleSetActiveMenu }) => {
    // Хук для визначення активної секції
    const useActiveSection = (sectionIds) => {
        const [activeId, setActiveId] = useState("");

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        // Якщо секція займає більше 50% екрана — вона активна
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        } else {
                            // Коли секція ПОКИДАЄ зону:
                            // Перевіряємо, чи це саме та секція, яка зараз активна
                            setActiveId((prevActiveId) =>
                                prevActiveId === entry.target.id
                                    ? ""
                                    : prevActiveId,
                            );
                        }
                    });
                },
                {
                    /* rootMargin: "верх право низ ліво"
      -80px зверху — це приблизна висота твого хедера. 
      Це каже браузеру: "не зважай на те, що відбувається під хедером".
      -80% знизу — каже: "ігноруй все, що внизу сторінки".
    */
                    rootMargin: "-40% 0px -95% 0px",
                    threshold: [0, 0.5], // Спрацьовувати, як тільки хоча б 1 піксель секції зайшов у цю зону
                },
                // {
                //     // Налаштовуємо відступи, щоб активація відбувалася ближче до центру
                //     rootMargin: "-20% 0px -70% 0px",
                // },
            );

            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            });

            return () => observer.disconnect();
        }, [sectionIds]);

        return activeId;
    };
    // Передаємо масив ID всіх секцій, які треба відстежувати
    const activeSection = useActiveSection(navigation.map((link) => link.src));

    useEffect(() => {
        if (isOpen) {
            document.body.getElementsByTagName("main")[0].style.filter =
                "blur(5px)";
            document.body.getElementsByTagName("footer")[0].style.filter =
                "blur(5px)";
        } else {
            document.body.getElementsByTagName("main")[0].style.filter = "";
            document.body.getElementsByTagName("footer")[0].style.filter = "";
        }
    }, [isOpen]);

    return (
        <nav className={`${css.nav} ${isOpen && css.navActive}`}>
            <ul className={css.navList}>
                {navigation.map(({ id, src, text }) => (
                    <li key={id}>
                        <a
                            // to={src}
                            // spy={true}
                            // smooth={true}
                            // offset={10}
                            // duration={500}
                            // activeClass={css.active}
                            // className={css.navLink}
                            // onSetActive={() => handleSetActiveMenu()}
                            href={`#${src}`}
                            // Додаємо клас active, якщо секція активна
                            className={`${css.navLink} ${activeSection === src ? css.active : ""}`}
                            onClick={(e) => {
                                // 1. Зупиняємо стандартний "стрибок" браузера
                                e.preventDefault();

                                // 2. Закриваємо мобільне меню (якщо воно є)
                                if (typeof handleSetActiveMenu === "function") {
                                    handleSetActiveMenu(false);
                                }

                                // 3. Запускаємо перевірену функцію
                                scrollToCallForm(src);

                                // 4. (Опціонально) Оновлюємо URL в адресному рядку без перезавантаження
                                window.history.pushState(null, null, `#${src}`);
                            }}
                        >
                            <span className={css.navText}>{text}</span>
                        </a>
                    </li>
                ))}
                <li>
                    <ButtonAppointment
                        onClick={() => {
                            // 1. Скролимо до форми
                            scrollToCallForm();

                            // 2. Закриваємо мобільне меню (якщо воно є)
                            if (typeof handleSetActiveMenu === "function") {
                                handleSetActiveMenu(false);
                            }
                        }}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
