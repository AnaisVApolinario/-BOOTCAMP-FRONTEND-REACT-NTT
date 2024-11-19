
export function header():void{
  const navbar = document.querySelector(".nav") as HTMLDivElement;
  const body = document.body as HTMLBodyElement;
  const overlay = document.querySelector(".overlay") as HTMLDivElement;
  const menuIcon = document.querySelector("#menu-icon") as HTMLElement;
  const dropdown = document.querySelector(".nav__item--dropdown") as HTMLLIElement;
  const subMenu = document.querySelector(".nav__submenu") as HTMLUListElement;
  const search = document.querySelector(".search__box") as HTMLDivElement;
  const searchIcon = document.querySelector("#search-icon") as HTMLElement;

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