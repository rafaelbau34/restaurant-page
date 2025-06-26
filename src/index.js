import "./styles.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

function clear() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  home();

  const homeBtn = document.querySelector("#homeBtn");
  homeBtn.addEventListener("click", () => {
    clear();
    home();
  });

  const menuBtn = document.querySelector("#menuBtn");
  menuBtn.addEventListener("click", () => {
    clear();
    menu();
  });

  const aboutBtn = document.querySelector("#aboutBtn");
  aboutBtn.addEventListener("click", () => {
    clear();
    about();
  });
});
