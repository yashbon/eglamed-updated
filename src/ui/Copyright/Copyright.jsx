const Copyright = ({ styles }) => {
    return (
        <div className={styles}>
            <h5 style={{ textAlign: "center" }}>
                © {new Date().getFullYear()} EglaMed. All rights reserved <br />{" "}
                Ліцензія на провадження господарської діяльності з медичної
                практики затверджена Наказом МОЗ України від 25.10.2021 №2332
            </h5>
        </div>
    );
};
export default Copyright;
