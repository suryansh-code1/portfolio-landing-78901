document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const themeToggle = document.getElementById("theme-toggle");

    sections.forEach((section) => {
        section.classList.add("fade-in");
    });

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});