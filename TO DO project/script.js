function showModal() {
  const modal = document.getElementById("modaId");
  modal.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("modaId");
  modal.style.display = "none";
}

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const taskHtml = `<div class="task">${title}(${description})</div>`;
  const todoElement = document.getElementById("todoTasks");

  todoElement.innerHTML = todoElement.innerHTML + taskHtml;

  hideModal();
  resetFrom();
}

function resetFrom() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
}

var font = (document.getElementsByTagName("p")[0].style.fontFamily =
  "Montserrat, Arial, sans-serif");
