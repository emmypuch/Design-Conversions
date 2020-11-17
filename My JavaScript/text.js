// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addTodo(event) {
  // Prevent form from submittin
  event.preventDefault();

  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoList.appendChild(newTodo);

  // Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTMl = '<i class="fas fa-check></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTMl = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);

  // Append To List
  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck {
  const item = e.target;
}
