import '../style.css';
import deleteIcon from '../assets/delete-icon.svg'


import { taskManager } from "./taskManager";



function showTaskList() {

  const todayListContainer = document.querySelector(".content-container");

  todayListContainer.innerHTML = ''; 
  todayListContainer.classList.add('today-list-container')
  

  const tasks = taskManager.getTaskList();

  tasks.forEach(task => {
  
    const taskElement = document.createElement("div");
    const taskName = document.createElement("p");
    const taskTime = document.createElement("p");


    const taskDeleteButton = document.createElement("img");
    taskDeleteButton.src = deleteIcon;
    taskDeleteButton.classList.add('task-delete-button');

    taskDeleteButton.addEventListener("click",() => {
      taskManager.deleteTask(task.id);
      showTaskList();
    })


    taskElement.classList.add('task-element');

    taskName.innerText = task.name;
    taskTime.innerText = task.time;


    taskElement.appendChild(taskName);
    taskElement.appendChild(taskTime);
    taskElement.appendChild(taskDeleteButton);

    todayListContainer.appendChild(taskElement);




  })
}




export { showTaskList };