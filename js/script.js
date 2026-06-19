// Muda aparência do header ao rolar a página
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }
});

// Animação dos cards ao aparecerem na tela
const cards = document.querySelectorAll(".card, li");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});