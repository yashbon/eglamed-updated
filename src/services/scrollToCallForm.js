const scrollToCallForm = (id = "callform") => {
    if (typeof window === "undefined") return;

    // Очищення ID та захист від об'єкта події
    const targetId = typeof id === 'string' ? id.replace('#', '') : "callform";
    const element = document.getElementById(targetId);

    if (element) {
        const performScroll = () => {
            const header = document.querySelector('header') || document.querySelector('[class*="header"]');
            const headerHeight = header ? header.offsetHeight : 0;

            // Твої ідеальні налаштування зміщення
            const extraOffset = window.innerWidth < 768 ? 120 : 100;

            const elementPosition = element.getBoundingClientRect().top;
            const currentScroll = window.pageYOffset;
            
            // Твоя переможна формула
            const offsetPosition = elementPosition + currentScroll - headerHeight + extraOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        };

        // Перший запуск для миттєвої реакції
        performScroll();

        // Повторний запуск через 400мс для фіксації на мобільних та після анімацій
        setTimeout(performScroll, 400);
    }
};

export default scrollToCallForm;