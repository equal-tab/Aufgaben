document.getElementById("add").addEventListener("click", newToDo);

function newToDo() {
  let input = document.getElementById("input");
  let todoview = document.getElementById("todoview");

  if (input.value.trim() !== "") {
    // Erstelle ein neues Todo-Objekt
    const newTodo = {
      text: input.value,
      _completed: false,
      get completed() {
        return this._completed;
      },
      set completed(value) {
        this._completed = value;
      },
    };

    // Lade die bestehende To-Do-Liste aus dem Local Storage oder initialisiere ein neues Array
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Füge das neue Todo zur Liste hinzu
    todos.push(newTodo);

    // Speichere die aktualisierte Liste im Local Storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // Füge das neue Todo zur HTML-Liste hinzu
    todoview.innerHTML += `
      <div>      
        <input type="checkbox">
        <p>${input.value}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>    
        </div>
    `;
    input.value = "";
  }
}

// Funktion zum Laden der To-Dos beim Seitenstart
function loadTodos() {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoview = document.getElementById("todoview");

  storedTodos.forEach((todo) => {
    todoview.innerHTML += `
      <div>
        <input type="checkbox">
        <p>${todo.text}</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      </div>
    `;
  });
}

// Lade die To-Dos beim Seitenstart
loadTodos();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("more");
  const contextMenu = document.getElementById("moreMenu");

  // Variable, um den Zustand des Menüs zu verfolgen
  let menuVisible = false;

  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Verhindert die Eventweiterleitung

    if (menuVisible) {
      // Menü verstecken, wenn es sichtbar ist
      contextMenu.style.display = "none";
    } else {
      // Menü anzeigen und an einer festen Position relativ zum Button positionieren
      const rect = button.getBoundingClientRect(); // Button Position und Größe
      contextMenu.style.display = "block";
      contextMenu.style.left = `${rect.left}px`;
      contextMenu.style.top = `${rect.bottom + window.scrollY}px`; // Position unterhalb des Buttons
    }

    // Sichtbarkeitsstatus umkehren
    menuVisible = !menuVisible;
  });

  // Klick außerhalb des Menüs schließt es wieder
  document.addEventListener("click", (event) => {
    if (!contextMenu.contains(event.target) && event.target !== button) {
      contextMenu.style.display = "none";
      menuVisible = false; // Zustand aktualisieren
    }
  });
});
