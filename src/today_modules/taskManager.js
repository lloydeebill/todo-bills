


class Task {
  constructor(name,time) {
    this.id = Date.now();
    this.name = name;
    this.time = time;
  }

}

class TaskManager {
  constructor(){
    this.taskList = this.loadTasks() || [];
  }

  addTask(name,time) {

    const newTask = new Task(name,time);
  
    this.taskList.push(newTask);
    this.saveTasks();
  
  }

  getTaskList() {
    return this.taskList
  }

  deleteTask(id) {
    this.taskList = this.taskList.filter(task => task.id !== id);
    this.saveTasks();
  }
  
  saveTasks() {
    localStorage.setItem('taskList',JSON.stringify(this.taskList));
  }

  loadTasks() {
    const tasks = localStorage.getItem('taskList');
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      return parsedTasks.map(task => new Task(task.name , task.time));
    }
    return [];
  }

}


const taskManager = new TaskManager();



export { taskManager };