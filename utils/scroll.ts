export const scrollToElement = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}; 