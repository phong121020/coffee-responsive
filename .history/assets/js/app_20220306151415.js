// SHOW MENU
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navClose = document.querySelector(".nav__close");
// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("is-show");
  });
}
//  MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("is-show");
  });
}
