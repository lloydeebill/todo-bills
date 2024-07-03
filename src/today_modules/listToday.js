

import { taskList as importedTaskList } from "./addTask";



function showTaskList() {

  const contentContainer = document.querySelector(".content-container");


  importedTaskList.forEach(task => {
  
    const taskElement = document.createElement("div");
    const taskName = document.createElement("p");
    const taskTime = document.createElement("p");

    taskName.innerText = task.name;
    taskTime.innerText = task.time;

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskTime);

    contentContainer.appendChild(taskElement);


  })
}




export { showTaskList };