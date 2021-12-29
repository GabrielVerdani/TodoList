const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

const resultList = document.querySelector("#result-list");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(todoInput.value === "") {
    return;
  }

  addItem(todoInput.value);
  todoInput.value = "";
})

function addItem(item) {
  let todoItem = document.createElement("li");
  todoItem.className = "result-item";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.title = "Marcar como concluído"

  let content = document.createElement("span");
  content.textContent = item;

  let deleteButton = document.createElement("button");
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash";
  deleteButton.appendChild(deleteIcon);
  deleteButton.title = "Deletar"

  deleteButton.addEventListener("click", () => {
    deleteButton.parentNode.remove()
  })

  todoItem.appendChild(checkbox);
  todoItem.appendChild(content);
  todoItem.appendChild(deleteButton);

  resultList.prepend(todoItem);
}