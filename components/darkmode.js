const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", Theme);
function Theme(){
  const modeText = document.querySelector(".mode-text")
  const body = document.querySelector("body");
  const div = document.querySelector(".createTask");
  const navbar = document.querySelector("header");
  const view = document.querySelector(".todoview");
  const moremenu = document.querySelector(".moreMenu");
  const settingsmenu = document.querySelector(".settingsmenu");
  const add = document.querySelector(".add");

  const isDark = body.classList.contains("dark");
  const theme = isDark ? "Light Mode" : "Dark Mode";

  body.classList.toggle("dark");
  div.classList.toggle("dark");
  navbar.classList.toggle("dark");
  view.classList.toggle("dark");
  moremenu.classList.toggle("dark");
  settingsmenu.classList.toggle("dark");
  add.classList.toggle("dark");

  modeText.innerText = theme;
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}
document.addEventListener("DOMContentLoaded", ()=>{
  const body = document.querySelector("body");
  const div = document.querySelector(".createTask");
  const navbar = document.querySelector("header");
  const view = document.querySelector(".todoview");
  const moremenu = document.querySelector(".moreMenu");
  const settingsmenu = document.querySelector(".settingsmenu");
  const add = document.querySelector(".add");
  const storedTheme = localStorage.getItem("PageTheme"); //variable um "Pagetheme" aus dem local Storage zu nehmen
if (storedTheme) {
  //überprüfen was "storedTheme" ist
  const theme = JSON.parse(storedTheme); //Json.parse guckt was "storedTheme" ist
  if (theme === "Dark Mode") {
    //wenn "theme" Dark mode ist wird:
    body.classList.add("dark");
    div.classList.add("dark");
    navbar.classList.add("dark"); 
    view.classList.add("dark");
    moremenu.classList.add("dark");
    settingsmenu.classList.add("dark"); 
    add.classList.add("dark");
  }
}
})