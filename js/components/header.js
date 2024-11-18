
export function header(){
  const navbar = document.querySelector(".nav");
  const body = document.body;
  const overlay = document.querySelector(".overlay");
  const menuIcon = document.querySelector("#menu-icon");
  const dropdown = document.querySelector(".nav__item--dropdown");
  const subMenu = document.querySelector(".nav__submenu");
  const search = document.querySelector(".search__box");
  const searchIcon = document.querySelector("#search-icon");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.add("menu-open");
  });

  overlay.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  });
  dropdown.addEventListener("click", () => {
    subMenu.classList.toggle("show");
    search.classList.remove("active__input");
  });

  searchIcon.addEventListener("click", () => {
    search.classList.toggle("active__input");
    subMenu.classList.remove("show");
  });
}