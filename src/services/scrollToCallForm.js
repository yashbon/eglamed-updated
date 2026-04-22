const scrollToCallForm = (id = "callform") => {
    if (typeof window === "undefined") return;

    const targetId = typeof id === 'string' ? id.replace('#', '') : "callform";
    const element = document.getElementById(targetId);

    if (element) {
        // Створюємо функцію-обгортку для точного розрахунку
        const getOffset = () => {
            const header = document.querySelector('header') || document.querySelector('[class*="header"]');
            const headerHeight = header ? header.offsetHeight : 0;
            const extraOffset = window.innerWidth < 768 ? 120 : 100;
            
            // Отримуємо АКТУАЛЬНУ позицію елемента відносно верху сторінки
            const rect = element.getBoundingClientRect();
            return rect.top + window.pageYOffset - headerHeight + extraOffset;
        };

        // 1. ПЕРШИЙ СКРОЛ (швидка реакція)
        window.scrollTo({
            top: getOffset(),
            behavior: 'smooth'
        });

        // 2. ДРУГИЙ СКРОЛ (через 600мс — коли дані точно зарендерились)
        setTimeout(() => {
            window.scrollTo({
                top: getOffset(), // ПЕРЕРАХОВУЄМО позицію заново!
                behavior: 'smooth'
            });
        }, 600);

        // 3. ТРЕТІЙ СКРОЛ (контрольний постріл для дуже повільного інтернету)
        setTimeout(() => {
            window.scrollTo({
                top: getOffset(),
                behavior: 'smooth'
            });
        }, 1200);
    }
};

export default scrollToCallForm;