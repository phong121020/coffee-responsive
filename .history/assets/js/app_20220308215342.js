// LOADER
onload = () => {
  const load = document.querySelector(".load");
  setTimeout(() => {
    load.style.display = "none";
  }, 2500);
};
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
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
    // console.log(this);
  } else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// MIXITUP
let mixerProducts = mixitup(".products__content", {
  selectors: {
    target: ".product__card",
  },
  animation: {
    duration: 300,
  },
});
mixerProducts.filter(".delicacies");
const linkProducts = document.querySelectorAll(".products__item");
function activeProducts() {
  linkProducts.forEach((item) => item.classList.remove("active-product"));
  this.classList.add("active-product");
}
linkProducts.forEach((item) => item.addEventListener("click", activeProducts));

// SHOW SCROLL UP
const scrollUp = document.querySelector(".scrollup");
function showScrollUp() {
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", showScrollUp);

// RETURN HOME
function returnHome() {
  scrollUp.setAttribute("href", "#home");
}
scrollUp.addEventListener("click", returnHome);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
