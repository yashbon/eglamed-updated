'use client';

import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Button from "@/ui/Button/Button";
import { animation } from "@/data/animation";
import * as API from "@/services/api";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useService } from "@/hooks/serviceContext";
import formatPhoneNumber from "@/services/formatPhoneNumber";
import css from "./CallForm.module.css";

const LS_KEY = "call_form";

const CallForm = ({price}) => {
    const { context, setContext } = useService();

    const initialValues = {
        name: "",
        surname: "",
        phone: "",
        service: "",
        comment: "",
        policy: false,
    };

    const [data, setData] = useLocalStorage(LS_KEY, initialValues);
    const { name, surname, phone, service, comment, policy } = data;
    const [isClickBut, setIsClickBut] = useState(false);
    const [isFetchOk, setIsFetchOk] = useState(false);

    const captchaRef = useRef(null);

    useEffect(() => {
        setData((prevState) => ({
            ...prevState,
            ["service"]: context,
        }));
    }, [context, setData]);

    // 2️⃣ Завантаження даних форми (LS_KEY)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedData = JSON.parse(localStorage.getItem(LS_KEY) || "null");
            if (storedData) setData(storedData);
        }
    }, [setData]);

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        setData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handlePhoneInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);

        setData((prevState) => ({
            ...prevState,
            ["phone"]: formattedPhoneNumber,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = captchaRef.current.getValue();

        if (service === "") {
            toast.error(`Оберіть потрібну послугу з переліку`, {
                duration: 3000,
                position: "top-center",
            });
        } else if (!policy) {
            toast.error(`Поставте "V" у полі "Погоджуюся з Політикою конфіденційності"`, { duration: 3000, position: "top-center" });
        } else if (!token) {
            toast.error(`Поставте "V" у полі "Я не робот"`, {
                duration: 3000,
                position: "top-center",
            });
        } else {
            const message = `Ім'я: ${name}\nПрізвище: ${surname}\nТелефон: +38 ${phone}\nПослуга: ${service}\nКоментар: ${comment}`;

            await axios
                .post("https://eglamed.com.ua/recaptcha", { token })
                .then((res) => {
                    if (res.data === "Human 👨 👩") {
                        setIsClickBut(true);

                        API.sendMessageToTelegram(message)
                            .then((response) => {
                                setTimeout(() => {
                                    setIsClickBut(false);
                                }, 500);

                                setIsFetchOk(true);
                                setTimeout(() => {
                                    setIsFetchOk(false);
                                }, 4000);

                                toast.success("Дані відправлено успішно!");
                            })
                            .catch((error) => {
                                const errorMessage = "Ой! Щось пішло не так :( Перезавантажте сторінку та спробуйте ще раз.\n";
                                toast.error(errorMessage);

                                setIsClickBut(false);
                            })
                            .finally(() => {
                                setData(initialValues);
                                captchaRef.current.reset();
                            });
                    } else {
                        toast.error("Robot 🤖. Перезавантажте сторінку та спробуйте ще раз.");
                    }
                })
                .catch((error) => {
                    const errorMessage = "Ой! Щось пішло не так :( Перезавантажте сторінку та спробуйте ще раз.\n";
                    toast.error(errorMessage);
                });
        }
    };

    return (
        <section id="callform" className={css.callform}>
            <div className="container">
                <motion.div className={css.wrapper} initial="hide" whileInView="show" viewport={{ once: true }} variants={animation}>
                    <Toaster />
                    <form className={css.formCall} onSubmit={handleSubmit} id="callform">
                        <h3 className={css.formTitle}>
                            Залиште свої дані,
                            <br /> ми вам передзвонимо
                        </h3>
                        <label className={css.formLabel}>
                            Ім&apos;я<span className={css.accent}>*</span>
                        </label>
                        <input
                            type="text"
                            className={css.formInput}
                            name="name"
                            minLength="2"
                            placeholder="Введіть ваше ім'я"
                            pattern="[A-Za-zА-Яа-яІіїЇЄєЁё'\-]{2,50}"
                            title="Ім'я повинно містити тільки літери та  апостроф ', довжина імені від 2 до 50 символів"
                            required
                            value={name}
                            onChange={handleChange}
                        />

                        <label className={css.formLabel}>
                            Прізвище<span className={css.accent}>*</span>
                        </label>
                        <input
                            type="text"
                            className={css.formInput}
                            name="surname"
                            placeholder="Введіть ваше прізвище"
                            required
                            minLength="2"
                            pattern="[A-Za-zА-Яа-яІіЇїЄєЁё'\-]{2,70}"
                            title="Прізвище повинно містити тільки літери, '-', апостроф ', довжина імені від 2 до 70 символів"
                            value={surname}
                            onChange={handleChange}
                        />

                        <label htmlFor="service" className={css.formLabel}>
                            Послуга<span className={css.accent}>*</span>
                        </label>
                        <select id="service" name="service" className={css.formSelect} value={service} onChange={handleChange}>
                            <option value="" disabled>
                                Оберіть послугу
                            </option>
                            {price?.length > 0 &&
                                price.map(({ service_id, description }) => (
                                    <option key={service_id} value={description} className={css.formOption}>
                                        {description}
                                    </option>
                                ))}
                        </select>

                        <label className={css.formLabel}>
                            Ваш телефон<span className={css.accent}>*</span>
                        </label>
                        <div className={css.inputWrapper}>
                            <p className={css.phoneCodeText}>+38</p>
                            <input className={css.formPhoneInput} name="phone" onChange={handlePhoneInput} value={phone} pattern="\(0\d{2}\) \d{3}-\d{2}-\d{2}" title="Телефонний номер повинен починатися з '+380' та мати 12 цифр" required />
                        </div>

                        <label htmlFor="comment" className={css.formLabel}>
                            Повідомлення
                        </label>
                        <textarea className={css.formTextarea} name="comment" id="comment" placeholder="Введіть текст повідомлення" value={comment} onChange={handleChange} />

                        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} ref={captchaRef} />

                        <div className={css.butWrapper}>
                            <div className={css.butWrap}>
                                <Button type="submit" caption="Запис на прийом" isClickBut={isClickBut} isFetchOk={isFetchOk} />
                            </div>
                        </div>

                        <div className={css.policyWrapper}>
                            <input type="checkbox" name="policy" id="policy" className={css.checkboxPolicy} checked={policy} onChange={handleChange} />
                            <svg width="16" height="15" className={css.checkboxIcon}>
                                <use href="./icons/symbol-defs.svg#icon-check"></use>
                            </svg>
                            <label htmlFor="policy" className={css.policyLabel}>
                                Погоджуюся з
                                <a href="./PrivatePolicy.docx" className={css.policyLink}>
                                    {" "}
                                    Політикою конфіденційності
                                </a>
                            </label>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default CallForm;
