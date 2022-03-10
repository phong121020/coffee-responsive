// SHOW MENU
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("is-show");
});
