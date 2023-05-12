// HEADER SCROLL
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let imageLogo = document.querySelector(".logoImg");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  // imageLogo.src = "images/IPTVtwo.svg";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    imageLogo.src = "images/IPTVtwo.svg";
  } else imageLogo.src = "images/IPTV.svg";
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// SWIPER
var swiper = new Swiper(".home", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    // delay: 2500,
    delay: 40000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
