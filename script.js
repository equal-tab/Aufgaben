
function scheduleTodoNotification(todo) {
  const todoTime = new Date(`${todo.date}T${todo.time}`); 
  const currentTime = new Date();
  const timeDifference = todoTime - currentTime;

  if (timeDifference > 0) {
      setTimeout(() => {
          showNotification(todo.text); 
      }, timeDifference);
  }
}

document.getElementById("add").addEventListener("click", newToDo());

document.addEventListener("DOMContentLoaded", loadTodos);
document.getElementById("addTime").addEventListener("click", newToDo)
function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


function newToDo() {
  
  let time = document.getElementById("time");
  let date = document.getElementById("date");
  let todoview = document.getElementById("todoview");

  if (input.value.trim() !== "") {
    const newTodo = {
      text: input.value,
      time: time.value,
      date: date.value,
      _completed: false,
      get completed() {
        return this._completed;
      },
      set completed(value) {
        this._completed = value;
      },
    };

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

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
    timeDateElement.textContent = `${formatDate(date.value)} ${time.value}`;
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
      deleteTodo(newTodo.text, todoItem);
    });

    const done = document.querySelector(".done");
    done.addEventListener("click", () => {
      done.classList = "doneright";
    });

    todoview.appendChild(todoItem);
    input.value = "";
    time.value = "";
    date.value = "";
  }
}

function deleteTodo(todoText, todoElement) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => todo.text !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoElement.remove();
}

function loadTodos() {
  let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  let todoview = document.getElementById("todoview");

  storedTodos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.style.display = "flex";
    todoItem.style.justifyContent = "space-between";
    todoItem.style.alignItems = "center";

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

    const binSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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


    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
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

