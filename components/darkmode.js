const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", Theme);
function Theme(){
  const modeText = document.querySelector(".mode-text")
  const body = document.querySelector("body");
  const div = document.querySelector(".createTask");
  const navbar = document.querySelector("header");
  const view = document.querySelector(".todoview");
  const calender = document.querySelector(".calender");
  const settingsmenu = document.querySelector(".settingsmenu");
  const add = document.querySelector(".add");

  const isDark = body.classList.contains("dark");
  const theme = isDark ? "Light Mode" : "Dark Mode";

  body.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt
  div.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt
  navbar.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt
  view.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt
  calender.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt
  settingsmenu.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt
  add.classList.toggle("dark"); // Klasse Dark wird zu Element mit der ID toggle hinzugefügt

  modeText.innerText = theme;
  localStorage.setItem("PageTheme", JSON.stringify(theme)); // Element mit dem Schlüssel "PageTheme" wird im local Storage gespeichert und der Inhalt ist der Inhalt der Variable theme
}
document.addEventListener("DOMContentLoaded", ()=>{
  const body = document.querySelector("body");
  const div = document.querySelector(".createTask");
  const navbar = document.querySelector("header");
  const view = document.querySelector(".todoview");
  const calender = document.querySelector(".calender");
  const settingsmenu = document.querySelector(".settingsmenu");
  const add = document.querySelector(".add");
  const storedTheme = localStorage.getItem("PageTheme"); //variable um "Pagetheme" aus dem local Storage zu nehmen
if (storedTheme) {
  //überprüfen was "storedTheme" ist
  const theme = JSON.parse(storedTheme); //überprüfen was der inhalt von der Variable Stored Theme ist
  if (theme === "Dark Mode") {
    //wenn "theme" Dark mode ist wird:
    body.classList.add("dark");  //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
    div.classList.add("dark"); //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
    navbar.classList.add("dark");  //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
    view.classList.add("dark"); //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
    calender.classList.add("dark"); //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
    settingsmenu.classList.add("dark");  //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
    add.classList.add("dark"); //Beim Laden der Seite wird den Elementen die Klasse dark hinzugefügt
  }
}
})