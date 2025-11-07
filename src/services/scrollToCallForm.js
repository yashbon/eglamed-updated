const scrollToCallForm = () => {
    const element = document.getElementById("callform");
    element.scrollIntoView({
        behavior: "smooth",
    });
};

export default scrollToCallForm;
