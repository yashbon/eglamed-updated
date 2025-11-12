const Copyright = ({ styles }) => {
    return (
        <div className={styles}>
            <p style={{ textAlign: "center", fontSize: "13px", fontWeight: "bold" }}>
                © {new Date().getFullYear()} EglaMed. All rights reserved <br /> Ліцензія на провадження господарської діяльності з медичної практики затверджена Наказом МОЗ України від 25.10.2021 №2332
            </p>
        </div>
    );
};
export default Copyright;
