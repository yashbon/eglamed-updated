import css from "./About.module.css";
import Slideshow from "@/components/Slideshow/Slideshow";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";

const About = () => {
    return (
        <section id="about" className={css.aboutSection}>
            <div className="container">
                <SectionTitle
                    isVisibale={false}
                    title={"Ласкаво просимо до EglaMed!"}
                />
                <Slideshow />
            </div>
        </section>
    );
};

export default About;
