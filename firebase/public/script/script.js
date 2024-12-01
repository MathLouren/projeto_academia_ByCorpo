// script.js
const toggleMenu = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
  document
    .querySelector(".menu-toggle")
    .setAttribute("aria-expanded", nav.classList.contains("open"));
};

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
document.querySelector(".close-menu").addEventListener("click", toggleMenu);

// Close menu on outside click
document.addEventListener("click", (event) => {
  const nav = document.querySelector("nav");
  if (!nav.contains(event.target) && !event.target.closest(".menu-toggle")) {
    nav.classList.remove("open");
  }
});

// Swiper initialization
new Swiper(".swiper-container", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  autoplay: { delay: 3000 },
});
