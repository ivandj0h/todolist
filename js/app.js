// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(e) {
  // Prevent form for submitting
  e.preventDefault();

  // Create todoDiv
  const todoDiv = document.querySelector("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "Hello World";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Check the mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);

  // Check the trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-button");
  todoDiv.appendChild(trashButton);

  // Append to the List
  todoList.appendChild("todoDiv");
}
