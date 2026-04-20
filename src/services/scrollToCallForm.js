// const scrollToCallForm = () => {
//     const element = document.getElementById("callform");
//     element.scrollIntoView({
//         behavior: "smooth",
//     });
// };

// export default scrollToCallForm;

// services/scrollToCallForm.js
const scrollToElement = (id = "callform") => {
    if (typeof window === "undefined") return;

    // Видаляємо '#' якщо він є в id
    const targetId = typeof id === 'string' ? id.replace('#', '') : "callform";
    const element = document.getElementById(targetId);

    if (element) {
        const performScroll = () => {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            // Твоє перевірене число
            const offsetPosition = elementPosition + 20; 

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        };

        performScroll();
        // Подвійний виклик для компенсації Framer Motion
        setTimeout(performScroll, 300);
    }
};

export default scrollToElement;