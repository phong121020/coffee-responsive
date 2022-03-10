// SHOW MENU
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navClose = document.querySelector(".nav__close");
const navItem = document.querySelectorAll(".nav__item");
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
// REMOVE MENU MOBILE
[...navItem].forEach((item) =>
  item.addEventListener("click", function () {
    navMenu.classList.remove("is-show");
  })
);
//CHANGE BACKGROUND HEADER
window.addEventListener("scroll", scrollHeader);
function scrollHeader() {
  const header = document.querySelector(".header");
  const headerOffset = header.offsetHeight;
  const windowHeight = document.offsetHeight;
  console.log(windowHeight);
  // if()
}
