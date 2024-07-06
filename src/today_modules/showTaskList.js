import '../style.css';
import { createDeleteButton } from '../shared-modules/deleteButton';


import { taskManager } from "./taskManager";



function createTaskElement(task){

    const taskElement = document.createElement("div");
    const taskName = document.createElement("label");
    const taskTime = document.createElement("p");
    const taskCheckBox = document.createElement("input");

    taskName.innerText = task.name;
    taskName.setAttribute('for',task.name);
    taskTime.innerText = task.time;

    taskCheckBox.type = "checkbox";
    taskCheckBox.id = task.name;
    taskCheckBox.name = task.name;

    const taskDeleteButton = createDeleteButton();

    taskDeleteButton.addEventListener("click",() => {
      taskManager.deleteTask(task.id);
      showTaskList();
    })


    taskElement.classList.add('task-element');

    taskElement.appendChild(taskCheckBox);
    taskElement.appendChild(taskName);
    taskElement.appendChild(taskTime);
    taskElement.appendChild(taskDeleteButton);

    return taskElement;

}

function showTaskList() {

  const todayListContainer = document.querySelector(".content-container");

  todayListContainer.innerHTML = ''; 
  todayListContainer.classList.add('today-list-container')
  

  const tasks = taskManager.getTaskList();

  tasks.forEach(task => {

    const taskElement = createTaskElement(task);
    todayListContainer.appendChild(taskElement);


  })
}




export { showTaskList };