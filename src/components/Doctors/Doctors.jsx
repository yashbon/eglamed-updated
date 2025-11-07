"use client";
import CardDoctor from "../CardDoctor/CardDoctor";
import SectionTitle from "@/ui/SectionTitle/SectionTitle";
import doctors from "@/data/doctors";
import css from "./Doctors.module.css";

const Doctors = () => {
    return (
        <section id="doctors" className={css.sectionDoctors}>
            <div className="container">
                <div className={css.doctorExposition}>
                    <SectionTitle title="Наші кваліфіковані лікарі" />
                </div>
                <ul className={css.doctorsList}>
                    {doctors.map((doctor) => (
                        <li key={doctor.id} className={css.doctorsItem}>
                            <CardDoctor doctor={doctor} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Doctors;
