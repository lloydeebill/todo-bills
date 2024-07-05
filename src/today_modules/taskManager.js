


class Task {
  constructor(name,time) {
    this.id = Date.now();
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

  deleteTask(id) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}


const taskManager = new TaskManager();

taskManager.addTask("Buy Groceries","8:45");
taskManager.addTask("Cook Lunch", "11:30");


export { taskManager };