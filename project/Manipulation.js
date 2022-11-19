import UI from "./Ui.js";
import Storage from "./Storage.js";
class Manipulation {
  id = 0;
  #receiveInputsData() {
    const {
      titleInputElm,
      descriptionInputElm,
      assignedToInputElm,
      startInputElm,
      endInputElm,
      priorityInputElms,
      statusInputElms,
      raangeInputElm,
      amountInputElm,
    } = UI.selectDomElements();
    let priority = Array.from(priorityInputElms).find((el) => el.checked);
    let status = Array.from(statusInputElms).find((el) => el.checked);
    const id = this.id ? this.id : Date.now();
    return {
      id,
      title: titleInputElm.value,
      description: descriptionInputElm.value,
      worker: assignedToInputElm.value,
      start: startInputElm.value,
      end: endInputElm.value,
      priority: priority ? priority.value : "",
      status: status ? status.value : "",
      range: Number(raangeInputElm.value),
      amount: Number(amountInputElm.value),
    };
  }
  #validateInputsData(data) {
    const isValid = true;
    const { title, description, worker, start, end, priority, status, amount } =
      data;
    const a = new Date(start);
    const b = new Date(end);
    const c = new Date();
    if (!title) {
      UI.showMessage("Title shouldn't be empty!", "danger");
      return;
    } else if (!description) {
      UI.showMessage("Description shouldn't be empty!", "danger");
      return;
    } else if (!worker) {
      UI.showMessage("You should assined the task to someone!", "danger");
      return;
    } else if (!start || !end || a.getTime() >= b.getTime()) {
      UI.showMessage("Must to give 24 hours for the task!", "danger");
      return;
    } else if (!priority) {
      UI.showMessage("Priority should be checked!", "danger");
      return;
    } else if (!status) {
      UI.showMessage("Status should be checked!", "danger");
      return;
    } else if (Number(amount) > 100) {
      UI.showMessage(
        "Completed in Percentage shouldn't be more then 100 !",
        "danger"
      );
      return;
    }

    return isValid;
  }
  #handleAddingTask() {
    const inputsData = this.#receiveInputsData();
    const isValid = this.#validateInputsData(inputsData);
    if (!isValid) return;
    Storage.saveData(inputsData);
    UI.showMessage("Task added successfully!");
    UI.showTaskToUI(Storage.allTask);
    UI.resetInputs();
    UI.showStorageDataToUI();
  }
  #handleUpdatingingTask() {
    const inputsData = this.#receiveInputsData();
    const isValid = this.#validateInputsData(inputsData);
    if (!isValid) return;
    Storage.updateStorage(inputsData);
    UI.showMessage("Task updated successfully!");
    UI.showTaskToUI(Storage.allTask);
    UI.hideUpdateBtn();
    UI.resetInputs();
  }
  #handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.classList.contains("add-task")) {
      this.#handleAddingTask();
    } else if (e.target.classList.contains("update-task")) {
      this.#handleUpdatingingTask();
    } else if (e.target.classList.contains("go-back")) {
      UI.resetInputs();
      UI.hideUpdateBtn();
    }
  }
  handleManipulation = (e) => {
    const { updateTaskBtn } = UI.selectDomElements();
    if (e.target.classList.contains("edit-task")) {
      this.id = Number(e.target.parentElement.dataset.id);
      UI.populateEditData(this.id);
    } else if (e.target.classList.contains("complete-task")) {
      this.id = Number(e.target.parentElement.dataset.id);
      Storage.completeTask(this.id);
      UI.showTaskToUI(Storage.allTask);
      if (updateTaskBtn.style.display === "block") UI.resetInputs();
      UI.hideUpdateBtn();
    } else if (e.target.classList.contains("delete-task")) {
      this.id = Number(e.target.parentElement.dataset.id);
      Storage.deleteTask(this.id);
      UI.showMessage("Task deleted successfully!", "info");
      UI.showTaskToUI(Storage.allTask);
      if (updateTaskBtn.style.display === "block") UI.resetInputs();
      UI.hideUpdateBtn();
      UI.showStorageDataToUI(Storage.allTask);
    }
  };
  init() {
    const { submitBtns } = UI.selectDomElements();
    submitBtns.addEventListener("click", (e) => this.#handleFormSubmit(e));
    UI.showTaskToUI(Storage.allTask);
  }
}

const manipulation = new Manipulation();
export default manipulation;
