const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", Theme);

function Theme() {
  const modeText = document.querySelector(".mode-text");
  const body = document.querySelector("body");
  const div = document.querySelector(".createTask");
  const navbar = document.querySelector("header");
  const view = document.querySelector(".todoview");
  const calender = document.querySelector(".calender");
  const settingsmenu = document.querySelector(".settingsmenu");
  const add = document.querySelector(".add");
  const modal = document.querySelector(".modal");
  const modalHeader = document.querySelector(".modal-header");
  const closeButton = document.querySelector(".close-button");
  const date = document.querySelector(".date");
  const time = document.querySelector(".time");
  const modalBody = document.querySelector(".modal-body");
  const addTime = document.querySelector(".addTime");

  const isDark = body.classList.contains("dark");
  const theme = isDark ? "Light Mode" : "Dark Mode";

  body.classList.toggle("dark");
  div.classList.toggle("dark");
  navbar.classList.toggle("dark");
  view.classList.toggle("dark");
  calender.classList.toggle("dark");
  settingsmenu.classList.toggle("dark");
  add.classList.toggle("dark");
  modal.classList.toggle("dark");
  modalHeader.classList.toggle("dark");
  closeButton.classList.toggle("dark");
  date.classList.toggle("dark");
  time.classList.toggle("dark");
  modalBody.classList.toggle("dark");
  addTime.classList.toggle("dark")
  

  modeText.innerText = theme;
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const div = document.querySelector(".createTask");
  const navbar = document.querySelector("header");
  const view = document.querySelector(".todoview");
  const calender = document.querySelector(".calender");
  const settingsmenu = document.querySelector(".settingsmenu");
  const add = document.querySelector(".add");
  const modal = document.querySelector(".modal");
  const modalHeader = document.querySelector(".modal-header");
  const closeButton = document.querySelector(".close-button");
  const date = document.querySelector(".date");
  const time = document.querySelector(".time");
  const modalBody = document.querySelector(".modal-body");
  const addTime = document.querySelector(".addTime");

  const storedTheme = localStorage.getItem("PageTheme");
    const theme = JSON.parse(storedTheme);
    if (theme === "Dark Mode") {
      body.classList.add("dark");
      div.classList.add("dark");
      navbar.classList.add("dark");
      view.classList.add("dark");
      calender.classList.add("dark");
      settingsmenu.classList.add("dark");
      add.classList.add("dark");
      modal.classList.add("dark");
      modalHeader.classList.add("dark");
      closeButton.classList.add("dark");
      date.classList.add("dark");
      time.classList.add("dark");
      modalBody.classList.add("dark");
      addTime.classList.add("dark");
    }
  }
);

