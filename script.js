const toggleButton = document.getElementById('toggleButton');
let isPrimaryColor = true;

toggleButton.addEventListener('click', () => {
    const root = document.documentElement;

    if (isPrimaryColor) {
        root.style.setProperty('--primary-color', 'var(--second-color)');
        root.style.setProperty('--second-color', 'var(--primary-color)');
    } else {
        root.style.setProperty('--primary-color', 'var(--second-color)');
        root.style.setProperty('--second-color', 'var(--primary-color)');
    }

    // isPrimaryColor = !isPrimaryColor;
});