const themeToggle = document.getElementById('theme-toggle');
const sections = document.querySelectorAll('section');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.classList.toggle('dark');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});