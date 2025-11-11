import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import Address from "../Address/Address";
import Email from "../Email/Email";
import Phone from "../Phone/Phone";
import css from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <section id="contacts" className={css.sectionContacts}>
            <div className="container">
                <SectionTitle title="Зв'яжіться з нами" />
                {/* <p className="section-description">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
                </p> */}
                <div className={css.contactsContent}>
                    <div className={css.adressWrapper}>
                        <Address />
                        <Phone />
                        <Email />
                    </div>
                    <div className={css.mapWrapper}>
                        <iframe
                            title="EglaMed on the Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.6618284439546!2d28.64876813172113!3d50.26570560110862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64c24e5c0001%3A0xe4f1b40c05ea32c3!2z0LLRg9C70LjRhtGPINCb0LXRgdGWINCj0LrRgNCw0ZfQvdC60LgsIDEz0JAsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAxMDAwMA!5e0!3m2!1suk!2sua!4v1700077936474!5m2!1suk!2sua"
                            width="100%"
                            height="450"
                            style={{ border: "none" }}
                            // allowfullscreen=""
                            loading="lazy"
                            // referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
