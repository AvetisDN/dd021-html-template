const themeSwitcher = document.querySelector("#theme-switcher");
let theme = "";

if (localStorage.getItem("atom-theme")) {
  theme = localStorage.getItem("atom-theme");
  document.body.classList.add(theme);
}

themeSwitcher.onclick = (e) => {
  e.currentTarget.classList.toggle("on");
  document.body.classList.toggle("dark");
  theme = theme === "dark" ? "" : "dark";
  localStorage.setItem("atom-theme", theme);
};

const menuButton = document.querySelector(".menu-button");
const shadow = document.querySelector(".shadow");
const menu = document.querySelector(".header .menu");

menuButton.onclick = (e) => {
  shadow.classList.add("show");
  menu.classList.add("show");
};

shadow.onclick = (e) => {
  shadow.classList.remove("show");
  menu.classList.remove("show");
};
