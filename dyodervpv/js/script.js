const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});

// SCROL //

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "buttom" });
ScrollReveal().reveal(".services-container", { origin: "buttom" });
ScrollReveal().reveal(".portofolio-box", { origin: "buttom" });
ScrollReveal().reveal(".contact", { origin: "buttom" });
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

// TYPED JS //

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Designer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 4000);
};

textLoad();
setInterval(textLoad, 12000);
