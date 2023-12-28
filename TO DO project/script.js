function showModal(targetId) {
  const modal = document.querySelector("#createModal");
  modal.style.display = "flex";
  currentTarget = targetId;
}

function hideModal() {
  const modal = document.getElementById("createModal");
  modal.style.display = "none";
}

let currentTarget = "todoTasks";
let generateId = 0;

function addTask() {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;
  const priority = document.getElementById("taskPriority").value;

  generateId++;

  //! fles column bolgoh
  const taskHtml = `<div class="task"
  id="task-${generateId}">
  <div class="taskHtml"> <i class="fa-solid fa-circle-check"></i> </div>
  <div>${title}</div>
  <div> <i class="fa-regular fa-circle-xmark"></i></div>


  ${description}<br>
  ${priority} <br>
  <button onclick="removeTask('task-${generateId}')">
  remove task
  </button>
  </div>`;

  const todoElement = document.getElementById(currentTarget);

  todoElement.innerHTML = todoElement.innerHTML + taskHtml;

  hideModal();
  resetFrom();

  // if (title === "") {
  //   alert("To do ---> Title ee oruulna uu");
  // }
  // if (description === "") {
  //   alert("To do ---> Description ee oruulna uu");
  // } else {
  //   todoElement.innerHTML = todoElement.innerHTML + taskHtml;
  //   hideModal();
  //   resetFrom();
  // }
}

function removeTask(taskId) {
  document.getElementById(taskId).remove();
}

function resetFrom() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
}
