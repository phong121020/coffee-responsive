// SHOW MENU
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navClose = document.querySelector(".nav__close");

navToggle.addEventListener("click", function () {
  navMenu.classList.add("is-show");
});
if (navClose) {
  navClose.addEventListener("click", function () {});
}
