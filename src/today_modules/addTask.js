


class Task {

  constructor(name,time) {
    this.name = name;
    this.time = time;
  }

}

//create Task
//after creating task it should add to the list

const taskList = []

const buyGrocery = new Task("Buy grocery","2:30 PM");

taskList.push(buyGrocery);

function show() {
  console.log(buyGrocery);
  console.log(taskList);
}

export {show, taskList};