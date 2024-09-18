document.getElementById("add").addEventListener("click", newToDo);
document.addEventListener("DOMContentLoaded", loadTodos);

function newToDo() {
  let input = document.getElementById("input");
  let todoview = document.getElementById("todoview");

  if (input.value.trim() !== "") {
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

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todoItem.appendChild(checkbox);

    const textElement = document.createElement("p");
    textElement.textContent = input.value;
    todoItem.appendChild(textElement);

    const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    starSvg.setAttribute("id", "star");
    starSvg.setAttribute("height", "24px");
    starSvg.setAttribute("width", "24px");
    starSvg.setAttribute("viewBox", "0 -960 960 960");
    starSvg.setAttribute("fill", "#e8eaed");
    starSvg.innerHTML = `<path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>`;
    todoItem.appendChild(starSvg);

    const binSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    binSvg.setAttribute("class", "bin");
    binSvg.setAttribute("height", "24px");
    binSvg.setAttribute("width", "24px");
    binSvg.setAttribute("viewBox", "0 -960 960 960");
    binSvg.setAttribute("fill", "#e8eaed");
    binSvg.innerHTML = `<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>`;
    todoItem.appendChild(binSvg);

    binSvg.addEventListener("click", function() {
      deleteTodo(newTodo.text, todoItem);
    });

    todoview.appendChild(todoItem);
    input.value = "";
  }
}

function deleteTodo(todoText, todoElement) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(todo => todo.text !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoElement.remove();
}

function loadTodos() {
  let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  let todoview = document.getElementById("todoview");

  storedTodos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todoItem.appendChild(checkbox);

    const textElement = document.createElement("p");
    textElement.textContent = todo.text;
    todoItem.appendChild(textElement);

    const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    starSvg.setAttribute("id", "star");
    starSvg.setAttribute("height", "24px");
    starSvg.setAttribute("width", "24px");
    starSvg.setAttribute("viewBox", "0 -960 960 960");
    starSvg.setAttribute("fill", "#e8eaed");
    starSvg.innerHTML = `<path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>`;
    todoItem.appendChild(starSvg);

    const binSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    binSvg.setAttribute("class", "bin");
    binSvg.setAttribute("height", "24px");
    binSvg.setAttribute("width", "24px");
    binSvg.setAttribute("viewBox", "0 -960 960 960");
    binSvg.setAttribute("fill", "#e8eaed");
    binSvg.innerHTML = `<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>`;
    todoItem.appendChild(binSvg);

    binSvg.addEventListener("click", function() {
      deleteTodo(todo.text, todoItem);
    });

    todoview.appendChild(todoItem);
  });
}
