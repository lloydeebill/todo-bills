


class Task {
  constructor(name,time) {
    this.name = name;
    this.time = time;
  }

}

class TaskManager {
  constructor(){
    this.taskList = [];
  }

  addTask(name,time) {

    let newTask = new Task(name,time);
  
    this.taskList.push(newTask);
  
  }

  getTaskList() {
    return this.taskList
  }
}


const taskManager = new TaskManager();


export { taskManager };