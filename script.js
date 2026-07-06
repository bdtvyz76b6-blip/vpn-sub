// Плавое появление блоков при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".card, .faq-item, .hero").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Эффект свечения кнопки
const button = document.querySelector(".button");

if (button) {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,.35),
      #3b82f6 55%)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.background =
      "linear-gradient(135deg,#3b82f6,#60a5fa)";
  });
}

// Подсветка активного пункта меню
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;

    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Параллакс фона
window.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.backgroundPosition =
    `${x * 40}px ${y * 40}px`;

});
к// Прелоадер
window.addEventListener("load", () => {

  setTimeout(() => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

      preloader.remove();

    },600);

  },1800);

});
