

const taskList = [];

class Task {

  constructor(name,time) {
    this.name = name;
    this.time = time;
  }

}

//create Task
//after creating task it should add to the list




function addTask(name,time) {

  let newTask = new Task(name,time);

  taskList.push(newTask);

}

addTask("Buy grocery","2:30 PM");
addTask("Cook dinner","6:00 PM");
addTask("Study Spanish","8:00 PM");




export { taskList };