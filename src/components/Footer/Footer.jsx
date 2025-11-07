import css from "./Footer.module.css";
import services from "../../data/services";
import Address from "../Address/Address";
import Email from "../Email/Email";
import Phone from "../Phone/Phone";
import Marker from "../Marker/Marker";
import Logo from "../../ui/Logo/Logo";
import Copyright from "@/ui/Copyright/Copyright";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className="container">
                <div className={css.footerOverlay}>
                    {/* <div className={css.footerDescription}> */}
                    {/* <div className={css.footerLogo}>
                            <Logo />
                        </div> */}
                    {/* <p className={css.footerText}>
                            Наш досвід до Ваших послуг.
                        </p> */}
                    {/* </div> */}
                    <div className={css.footerContent}>
                        <div className={css.footerLogo}>
                            <Logo />
                        </div>
                        <div className={css.footerServices}>
                            <h3 className={css.footerTitle}>Послуги</h3>
                            <ul>
                                {services.map((service) => (
                                    <li key={service.id} className={css.footerService}>
                                        <Marker />
                                        <p className={css.footerText}>{service.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={css.footerContacts}>
                            <h3 className={css.footerTitle}>Контакти</h3>
                            <ul className={css.footerContactsList}>
                                <li>
                                    <Address />
                                </li>
                                <li>
                                    <Phone />
                                </li>
                                <li>
                                    <Email />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Copyright styles={css.copyright} />
            </div>
        </footer>
    );
};

export default Footer;
