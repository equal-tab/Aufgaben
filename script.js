document.getElementById("add").addEventListener("click", newToDo);

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

    // Load existing To-Do list from Local Storage or initialize an empty array
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Add the new Todo to the list
    todos.push(newTodo);

    // Save the updated list in Local Storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // Add the new Todo to the HTML list
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.innerHTML = `
      <input type="checkbox">
      <p>${input.value}</p>
      <svg  id="star"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
      <svg class="bin" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    `;

    // Add delete functionality
    todoItem.querySelector(".bin").addEventListener("click", function() {
      deleteTodo(newTodo.text, todoItem);
    });

    todoview.appendChild(todoItem);
    input.value = "";
  }
}

function deleteTodo(todoText, todoElement) {
  // Load the existing todos from localStorage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Filter out the todo that matches the provided text
  todos = todos.filter(todo => todo.text !== todoText);

  // Save the updated todos array back to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Remove the todo element from the DOM
  todoElement.remove();
}

// Funktion zum Laden der To-Dos beim Seitenstart
function loadTodos() {
  let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  let todoview = document.getElementById("todoview");

  storedTodos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.innerHTML = `
      <input type="checkbox">
      <p>${todo.text}</p>
      <svg  id="star"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
      <svg class="bin" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    `;

    // Add delete functionality
    todoItem.querySelector(".bin").addEventListener("click", function() {
      deleteTodo(todo.text, todoItem);
    });

    todoview.appendChild(todoItem);
  });
}

// Lade die To-Dos beim Seitenstart
loadTodos();
