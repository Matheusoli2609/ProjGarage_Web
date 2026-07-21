// Muda aparência do header ao rolar a página
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {header.classList.add("header-scroll");} 
    else {header.classList.remove("header-scroll");}
});

// Hero aparece com animação ao carregar a página
const hero = document.querySelector(".hero");

window.addEventListener("load", () => {hero.classList.add("show");});

// Animação dos cards ao aparecerem na tela
const elementos = document.querySelectorAll(".card, li, .contato");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
            {entry.target.classList.add("show");}
        else{entry.target.classList.remove("show");}
    });

},
{threshold:0.2});

elementos.forEach((elemento)=>{observer.observe(elemento);});