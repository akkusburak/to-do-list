//detay ekranı ilk aşamada kapalı
document.querySelector(".todo-details").style.display = "none";

//input değeri için variable
let newTask;

//get # of tasks
getTaskSize = () => {
  return document.querySelectorAll(".task").length;
};

// task sayısı alma ve ekrana yazdırma
setTaskSize = () => {
  document.querySelector(".task-count").textContent = `${getTaskSize()} ${
    getTaskSize() > 1 ? "tasks" : "task"
  } remaining.`;
};
setTaskSize();

//add task
const addTask = function () {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const span = document.createElement("SPAN");
  const btn = document.createElement("button");
  div.appendChild(input);
  div.appendChild(label);
  label.appendChild(span);
  div.className = "task";
  input.className = "input-task";
  input.type = "checkbox";
  input.id = `task${getTaskSize() + 1}`;
  label.setAttribute("for", `task${getTaskSize() + 1}`);
  span.className = "custom-checkbox";
  textNode = document.createTextNode(newTask);
  label.appendChild(textNode);
  return div;
};

//task ekleme buton fonksiyonu
const tasksContainer = document.querySelector(".tasks-container");
const addButton = document.querySelector(".btn.create");
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const newInput = document.querySelector(".new-input");
  newTask = newInput.value;
  const detailsTask = document.getElementById("details");
  if (newTask != null && typeof newTask === "string" && newTask.length !== 0) {
    newInput.value = null;
    tasksContainer.appendChild(addTask());
    setTaskSize();
    detailsTask.innerHTML = newTask;
    document.querySelector(".todo-details").style.display = "none";
  }
});

//delete task
const deleteButton = document.querySelector(".btn.delete");
deleteButton.addEventListener("click", function () {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  checkedList = [...checked].map((c) => c.id);
  console.log(checkedList, checked.length);
  checkedList.forEach((e) => {
    tasksContainer.removeChild(document.getElementById(e).closest("div"));
  });
  setTaskSize();
});

//edit task
const editButton = document.querySelector(".btn.edit");
editButton.addEventListener("click", function () {});
