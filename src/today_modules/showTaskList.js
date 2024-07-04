import '../style.css';


import { taskManager } from "./addTask";



function showTaskList() {

  const todayListContainer = document.querySelector(".content-container");
  todayListContainer.classList.add('today-list-container')
  

  const tasks = taskManager.getTaskList();

  tasks.forEach(task => {
  
    const taskElement = document.createElement("div");
    const taskName = document.createElement("p");
    const taskTime = document.createElement("p");

    taskElement.classList.add('task-element');

    taskName.innerText = task.name;
    taskTime.innerText = task.time;

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskTime);

    todayListContainer.appendChild(taskElement);


  })
}




export { showTaskList };