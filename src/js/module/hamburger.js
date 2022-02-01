const hamburger = document.querySelector("button.hamburger");
const header__navbar = document.querySelector(".header__navbar");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  header__navbar.classList.toggle("active");
});
