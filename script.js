document.addEventListener("DOMContentLoaded", loadTodos);  
document.getElementById("add").addEventListener("click", newToDo);
document.getElementById("addTime").addEventListener("click", newToDo);

//funktion zum Formatieren des Datums
function formatDate(dateString) {
  if (!dateString) return "";  //wenn kein Datum hinzugefügt wurde  wird ein leerer String zurückgegeben
  const date = new Date(dateString);  //neues  Date-Objekt aus den übergegebenen Datumsstring erstellen
  const day = String(date.getDate()).padStart(2, "0"); // Tag des Monats holen und in zweistellige Zahl konvertieren
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Monat holen und in zweistellige Zahl konvertieren
  const year = date.getFullYear(); // volles Jahr holen
  return `${day}/${month}/${year}`; // inhalte der Variablen day, month und year als string zurückgeben
}

function newToDo() {
  let time = document.getElementById("time");
  let date = document.getElementById("date");
  let todoview = document.getElementById("todoview");

  if (input.value.trim() !== "") { // überprüft ob das eingabefeld leer ist und entfernt überflüssige leerzeichen 
    const newTodo = {  // Variable mit den eigenschadten text, Zeit und Datum
      text: input.value, 
      time: time.value,
      date: date.value,
    };

    let todos = JSON.parse(localStorage.getItem("todos")) || [];  
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos)); // eintrag im local Storage erstellen mit dem Schlüssel "todos" und einen JSON mit dem Inhalt der Variabel "todos"

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList = "done";
    todoItem.appendChild(checkbox);

    const textElement = document.createElement("p");
    textElement.textContent = input.value;
    textElement.classList = "doneText";
    todoItem.appendChild(textElement);

    const timeDateElement = document.createElement("p");
    timeDateElement.textContent = `${formatDate(date.value)} ${time.value}`; //Mithilfe der in der funktion "formatDate" formatierten Daten wird der Text hinzugefügt
    timeDateElement.classList = "doneText";
    todoItem.appendChild(timeDateElement);

    const binSvg = document.createElementNS( //Variabel für das erstellen eines SVG Elements mit dem Namespace
      "http://www.w3.org/2000/svg",
      "svg"
    );
    binSvg.setAttribute("class", "bin"); // setzt die Klasse des SVG Elements auf "bin"
    binSvg.setAttribute("height", "24px"); // setzt die höhe des SVG Elements auf 24px
    binSvg.setAttribute("width", "24px"); // setzt die breite des SVG Elements auf 24px
    binSvg.setAttribute("viewBox", "0 -960 960 960"); // Festlegen des ViewBox-Attributs, um das Sichtfeld des SVG zu definieren.
    binSvg.setAttribute("fill", "#e8eaed"); // legt die farbe des SVG Elements fest
    binSvg.innerHTML = `<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>`; // einfügen der Pfad Daten für das Symbol 
    todoItem.appendChild(binSvg);

    binSvg.addEventListener("click", function () {
      deleteTodo(newTodo.text, todoItem);
    });

    todoview.appendChild(todoItem);
    input.value = "";
    time.value = "";
    date.value = "";

const done = document.querySelector(".done");
    done.addEventListener("click", () => {
      done.classList = "doneright";
    });
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        textElement.classList.add("doneright");
        timeDateElement.classList.add("doneright");
      } else {
        textElement.classList.remove("doneright");
        timeDateElement.classList.remove("doneright");
      }
    });
  }
}

function deleteTodo(todoText, todoElement) {
  let todos = JSON.parse(localStorage.getItem("todos")) || []; //Variabel für das abrufen der todos im local Storage
  todos = todos.filter((todo) => todo.text !== todoText); //Filtern der Todos, um das Todo mit dem entsprechenden Text zu entfernen
  localStorage.setItem("todos", JSON.stringify(todos)); // speichern der aktualisierten Liste im Local Storage
  todoElement.remove(); // entfernt das Element aus dem DOM
}

function loadTodos() {
  let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  let todoview = document.getElementById("todoview");

  storedTodos.forEach((todo) => { //durchläuft jedes Todo Elements im 
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("done");
    todoItem.appendChild(checkbox);

    const textElement = document.createElement("p");
    textElement.textContent = todo.text;
    textElement.classList = "doneText";
    todoItem.appendChild(textElement);

    const timeDateElement = document.createElement("p");
    timeDateElement.textContent = `${formatDate(todo.date)} ${todo.time}`;
    timeDateElement.classList = "doneText";
    todoItem.appendChild(timeDateElement);

    const binSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    binSvg.setAttribute("class", "bin");
    binSvg.setAttribute("height", "24px");
    binSvg.setAttribute("width", "24px");
    binSvg.setAttribute("viewBox", "0 -960 960 960");
    binSvg.setAttribute("fill", "#e8eaed");
    binSvg.innerHTML = `<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>`;
    todoItem.appendChild(binSvg);

    binSvg.addEventListener("click", function () {
      deleteTodo(todo.text, todoItem);
    });
checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        textElement.classList.toggle("doneright");
        textElement.classList.add("doneright");
        timeDateElement.classList.add("doneright");
      } else {
        textElement.classList.remove("doneright");
        timeDateElement.classList.remove("doneright");
      }
    });

    todoview.appendChild(todoItem);
  });
  
}
