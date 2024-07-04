
import { taskManager } from "./taskManager";
import { showToday } from "./showToday";

function showAddTaskWIndow() {


  const addTaskButton = document.querySelector('.add-task');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.close-button');

  addTaskButton.addEventListener("click", () => {
  modal.style.display = "block";

  })

  closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  })

  const addTaskForm = document.querySelector('#addTaskForm');

  addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskName = document.querySelector('#taskName').value;
    const taskTime = document.querySelector('#taskTime').value;

    taskManager.addTask(taskName, taskTime);

    document.querySelector('#taskName').value = '';
    document.querySelector('#taskTime').value = '';

    modal.style.display = 'none';

    showToday();
  })

}

export { showAddTaskWIndow }; 