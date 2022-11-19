class Storage {
  allTask = localStorage.getItem("mobin-task-data")
    ? JSON.parse(localStorage.getItem("mobin-task-data"))
    : [];
  saveData(data) {
    this.allTask.push(data);
    localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
  }
  updateStorage(data) {
    const tasks = this.allTask.filter((task) => task.id !== data.id);
    this.allTask = tasks;
    this.allTask.push(data);
    localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
  }
  deleteTask(id) {
    const tasks = this.allTask.filter((task) => task.id !== id);
    this.allTask = tasks;
    localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
  }
  completeTask(id) {
    let index;
    this.allTask.forEach((task) => {
      if (task.id === id) index = this.allTask.indexOf(task);
    });
    this.allTask[index].status = "Completed";
    this.allTask[index].amount = 100;
    localStorage.setItem("mobin-task-data", JSON.stringify(this.allTask));
  }
}

const store = new Storage();

export default store;
